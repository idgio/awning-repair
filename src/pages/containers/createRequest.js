import React, { Component } from 'react'
import CreateRequestLayout from '../components/createRequestLayout'
import DetailsCreateRequestLayout from './detailsCreateRequest'

class CreateRequest extends Component {
    state = {
        name: '',
        email: '',
        company: '',
        phone: '(   )    -    ',
        city: '',
        state: '',
        zip: '',
        width: '',
        drop : '',
        valance: '',
        projection: '',
        framing: '',
        lacebar: '',
        fabricSelection: '',
        quantity: '',
        awning: null,
    };
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
     };
     //----------------------------------------------
   handleClickSave = () => {
      this.setState({ open: false });
      console.log(this.state);
      
    };
    render(){
        return(
            <CreateRequestLayout {...this.state} handleChange={this.handleChange} DetailsCreateRequestLayout={DetailsCreateRequestLayout} handleClickSave={this.handleClickSave} />
        )
    }
}
export default CreateRequest