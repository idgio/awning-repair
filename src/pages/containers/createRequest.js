import React, { Component } from 'react'
import CreateRequestLayout from '../components/createRequestLayout'
import DetailsCreateRequestLayout from './detailsCreateRequest'

let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmYzliYWIwMWJjODE0MjE5NTM3ZDYzMjNiMGFiYmIzODAyYWZhNzNmYWM1ZGU5MDg1NjA0MDZhZTgwYzFiMjM1NzE1ZTNkZTYwMzc5Yjg5In0.eyJhdWQiOiIxIiwianRpIjoiMWZjOWJhYjAxYmM4MTQyMTk1MzdkNjMyM2IwYWJiYjM4MDJhZmE3M2ZhYzVkZTkwODU2MDQwNmFlODBjMWIyMzU3MTVlM2RlNjAzNzliODkiLCJpYXQiOjE1NDM2MTQzNDUsIm5iZiI6MTU0MzYxNDM0NSwiZXhwIjoxNTc1MTUwMzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mdqxa0HrBHMj0fros1hq0wurivLRdtvGIYo8Ll29uqU2_LANeVAbzRwvCmXh553bIBUFOaM5WDSzVgLUCvgW_au5VamZRy7_H6tUSxbdpEtxx-x0vqm3q0dsC7N9FlXxwu6p7oE1PsxwdzTim5rn7qX44DTkCyYeqC4U4yAMo69xluYLtFJ0GVQ_IeYag8aofc2Q3QTJsWa-tdsmKR-2vfGza2WPgYLaSqpgqx1bZl7fX8mK3JjdkSl3IKmGmVwgafU7wuymaBklLhKER3_K5IshEgE-pzsoEgDU7-pFnxaJF0iGJXSHtZnRMVGVDhUiG7enoJbKaku8r7QlpXyHB_jKvjCrErkIjKVQVaxmP67T_npVkabzedpEzutDIVCdoSKCw_IaEdyNd_a_VLCJOInGlznQljp--YCleVvRO_r1iXFC1QPKuaW3JiVYUeEcOyiUmyNsTTd1seHxU8ueb7r2gaH_FabPec3mZwHjBKLEnILJXQohw3GhB7rgUxHg5lQG4W8MAl3_ZpWFAnCrWF-_LyFNo5dRaoIHkubyCgIBN2ipkTq77JIeqEiYFvZjHR7ZgmqvozO8pOifOdcROVbCGdMRIvdSQ9n7AmnkneictXrWtjOSo511r5HzXm18fCi6fs6HZUK3tLqZDk-WHskP7uFEUn34CRZv_eqEYNM');
    myHeaders.append('Accept', 'application/json');
    
// const myInit = { method: 'POST',
//               headers: myHeaders,
//               mode: 'cors',
//               cache: 'no-cache' };

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
        shippingAddress: '',
        lacebar: '',
        fabricSelection: '',
        quantity: '',
        awnings: [],
        sendFiles: [],
        completed: 0,
    };
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
     };
     //----------------------------------------------
   handleClickSave = () => {
      this.setState({ open: false });
      //console.log(this.state);
      var data = new FormData();
      var item_id = 0;
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("company", this.state.company);
      data.append("phone", this.state.phone);
      data.append("city", this.state.city);
      data.append("state", this.state.state);
      data.append("zip", this.state.zip);
      data.append("shippingAddress", this.state.shippingAddress);
      
      if(this.state.awnings.length > 0)
      {
          this.setState({ completed: 10 });
          console.log(10)
          data.append("awnings", JSON.stringify(this.state.awnings));
          fetch("https://dev.thecanvasmart.com/awning-repair/api/requests", {
            method: 'POST', // or 'PUT'
            body: data, // data can be `string` or {object}!
            headers:myHeaders
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then((response) =>{
            item_id = response
            this.setState({ completed: 25 });
            console.log(25)
          })
          .then(()=>{
            if(this.state.sendFiles.length > 0)
            {
                this.state.sendFiles.forEach((files,index) => {
                  if(files.length > 0)
                  {
                      
                      files.forEach((element) => {
                      var data = new FormData();
                      data.append("file", element);
                      data.append("item_id", item_id);
                      fetch("https://dev.thecanvasmart.com/awning-repair/api/fabrics", {
                        method: 'POST', // or 'PUT'
                        body: data, // data can be `string` or {object}!
                        headers:myHeaders
                      }).then(res => res.json())
                      .catch(error => console.error('Error:', error))
                      .then(response =>{
                        
                        console.log(response)
                      });
                    })
                    this.setState({ completed: (((index+1)*75)/this.state.sendFiles.length) });
                  }
                })
            
          }
          })
          .then(()=>{
            this.setState({ 
              name: '',
              email: '',
              company: '',
              phone: '',
              city: '',
              state: '',
              zip: '',
              width: '',
              drop : '',
              valance: '',
              projection: '',
              framing: '',
              shippingAddress: '',
              lacebar: '',
              fabricSelection: '',
              quantity: '',
              awnings: [],
              sendFiles: [],
              completed: 100,
              
            });
          })
          
      }
      
      
      
      
    };
    //----------------------------
    handleAwningArray = newawning => {
        this.setState(state => {
          const awnings = [...state.awnings, newawning];
    
          return {
            awnings,
          };
        });
    }
    //----------------------------
    handleFilesArray = files => {
        this.setState(state => {
          const sendFiles = [...state.sendFiles, files];
    
          return {
            sendFiles,
          };
        });
    }
    //---------------------------------
    handleAwningDelete = id => {
        this.setState(state => {
          const awnings = state.awnings.filter((item, j) => id !== j);
          const sendFiles = state.sendFiles.filter((item, j) => id !== j);
    
          return {
            awnings,
            sendFiles,
          };
        });    
    }
    
    render(){
        return(
            <CreateRequestLayout {...this.state} handleChange={this.handleChange} DetailsCreateRequestLayout={DetailsCreateRequestLayout} handleClickSave={this.handleClickSave} handleAwningArray={this.handleAwningArray} handleAwningDelete={this.handleAwningDelete} handleFilesArray={this.handleFilesArray}/>
        )
    }
}
export default CreateRequest