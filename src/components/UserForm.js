import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Conform from './Conform';
import Success from './Success';

class UserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             step:1,
             firstName:"",
             lastName:"",
             email:"",
             occupation:"",
             city:"",
             bio:""
        }
    }

    // Procide to the next step
    nextStep=()=>{
        const {step} = this.state;
        this.setState({
            step:step +1
        });
    }
    // Procide to the previous step
    prevStep=()=>{
        const {step} = this.state;
        this.setState({
            step:step -1
        });
    }

    // Handle fields change
    handleChange = input => e=>{
        this.setState({[input]: e.target.value});
    }
    
    render() {
        const {step,firstName,lastName,email,occupation,city,bio} = this.state;
        const values = {firstName,lastName,email,occupation,city,bio};

        switch(step){
            case 1:
                return(
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return(
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep ={this.prevStep}
                    values={values}
                    handleChange={this.handleChange}
                    />
                )
            case 3:
                return(
                    <Conform
                    nextStep={this.nextStep}
                    prevStep ={this.prevStep}
                    values={values}
                    />
                )    
            case 4:
                return(
                    <Success/>
                )           
        }
    }
}

export default UserForm
