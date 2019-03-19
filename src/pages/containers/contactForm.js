import React, { Component } from 'react'
import ContactFormLayout from '../components/contactFormLayout'

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    };
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
     };
    render(){
        return(
            <ContactFormLayout {...this.state} handleChange={this.handleChange}/>
        )
    }
}
export default ContactForm