import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import List from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui';

class Success extends Component {


    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Successfully Saved"/>

                    <h1>Thank You For Submission</h1>
                    <p>We will connect you soon!</p>
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

export default Success
