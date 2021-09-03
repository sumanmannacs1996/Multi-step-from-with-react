import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import List from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui';

class FormUserDetails extends Component {
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values:{firstName,lastName,email,occupation,city,bio},handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Conform User Data"/>

                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText={email}
                        />
                        <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={city}
                        />
                        <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                        />
                    </List>
                    
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick ={this.back}
                    />
                    <RaisedButton
                    label="Conform & Continue"
                    primary={true}
                    style={styles.button}
                    onClick ={this.continue}
                    />
                </React.Fragment>
                
            </MuiThemeProvider>
        )
    }
}

const styles={
    button:{
        margin:15
    }
}

export default FormUserDetails
