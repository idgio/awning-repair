import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import AppBar from '../components/appBar'
import ContactForm  from './contactForm'
import Cart  from './cart'
import CreateRequest  from './createRequest'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {  BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const theme = createMuiTheme({
  
  palette: {
    primary: {
      light: '#6ce0ff',
      main: '#1daeeb',
      dark: '#007fb8',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#2c2c2c',
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    },
  },
});

let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmYzliYWIwMWJjODE0MjE5NTM3ZDYzMjNiMGFiYmIzODAyYWZhNzNmYWM1ZGU5MDg1NjA0MDZhZTgwYzFiMjM1NzE1ZTNkZTYwMzc5Yjg5In0.eyJhdWQiOiIxIiwianRpIjoiMWZjOWJhYjAxYmM4MTQyMTk1MzdkNjMyM2IwYWJiYjM4MDJhZmE3M2ZhYzVkZTkwODU2MDQwNmFlODBjMWIyMzU3MTVlM2RlNjAzNzliODkiLCJpYXQiOjE1NDM2MTQzNDUsIm5iZiI6MTU0MzYxNDM0NSwiZXhwIjoxNTc1MTUwMzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mdqxa0HrBHMj0fros1hq0wurivLRdtvGIYo8Ll29uqU2_LANeVAbzRwvCmXh553bIBUFOaM5WDSzVgLUCvgW_au5VamZRy7_H6tUSxbdpEtxx-x0vqm3q0dsC7N9FlXxwu6p7oE1PsxwdzTim5rn7qX44DTkCyYeqC4U4yAMo69xluYLtFJ0GVQ_IeYag8aofc2Q3QTJsWa-tdsmKR-2vfGza2WPgYLaSqpgqx1bZl7fX8mK3JjdkSl3IKmGmVwgafU7wuymaBklLhKER3_K5IshEgE-pzsoEgDU7-pFnxaJF0iGJXSHtZnRMVGVDhUiG7enoJbKaku8r7QlpXyHB_jKvjCrErkIjKVQVaxmP67T_npVkabzedpEzutDIVCdoSKCw_IaEdyNd_a_VLCJOInGlznQljp--YCleVvRO_r1iXFC1QPKuaW3JiVYUeEcOyiUmyNsTTd1seHxU8ueb7r2gaH_FabPec3mZwHjBKLEnILJXQohw3GhB7rgUxHg5lQG4W8MAl3_ZpWFAnCrWF-_LyFNo5dRaoIHkubyCgIBN2ipkTq77JIeqEiYFvZjHR7ZgmqvozO8pOifOdcROVbCGdMRIvdSQ9n7AmnkneictXrWtjOSo511r5HzXm18fCi6fs6HZUK3tLqZDk-WHskP7uFEUn34CRZv_eqEYNM');
    myHeaders.append('Accept', 'application/json');

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        awnings: JSON.parse(localStorage.getItem('awnings')) || [],
        awningAmount: 0,
        contactName: "",
        contactCompany: "",
        contactEmail: "",
        contactPhone: '(   )    -    ',
        toNewAwning: false,
      }
    }
    // state = {
    //   open: false,
    //   imageSrc: null,
    //   imageTitle: null,
      
    // };
    componentWillMount() {
      this.setState({
        awningAmount: this.state.awnings.length > 1 ? this.state.awnings.reduce((a, b) => a[11]*a[10] + b[11]*b[10]) : (this.state.awnings.length > 0 ? this.state.awnings[0][11]*this.state.awnings[0][10] : 0)
      })
    };
    handleChangeText = name => event => {
        this.setState({
          [name]: event.target.value,
        },()=>{
            if(name === 'shippingAddress'  || name === 'state'  || name === 'city'  || name === 'zip' )
            {
                this.setState({
                  loading : true,
                  completed: 0,
                })
            }
        });
     };
     handleChange = i => event => {
       const valueQ = event.target.value;
       if(valueQ > 0){
        this.setState(state => {
            const awnings = state.awnings.map((item, j) => {
            
              if (j === i) {
                return item = [
                                item[0],
                                item[1],
                                item[2],
                                item[3],
                                item[4],
                                item[5],
                                item[6],
                                item[7],
                                item[8],
                                item[9],
                                valueQ,
                                item[11],
                                item[12],
                                item[13],
                              ];
              } else {
                return item;
              }
            });
            return {
              awnings,
            };
          },() => {
        localStorage.setItem('awnings', JSON.stringify(this.state.awnings))
        this.setState({
          awningAmount: this.state.awnings.length > 1 ? this.state.awnings.reduce((a, b) => a[11]*a[10] + b[11]*b[10]) : (this.state.awnings.length > 0 ? this.state.awnings[0][11]*this.state.awnings[0][10] : 0)
        })
      });
       }
    };
    handleClickOpen = (image,e) => {
      this.setState({
        open: true,
        imageSrc: image.src,
        imageTitle: image.title,
      });
    };
  
    handleClose = value => {
      this.setState({  open: false });
    };
    //------------------------------
    
     handleAwningDelete = id => {
        this.setState(state => {
          const awnings = state.awnings.filter((item, j) => id !== j);
          
    
          return {
            awnings,
          };
        },() => {
        localStorage.setItem('awnings', JSON.stringify(this.state.awnings))
        this.setState({
        awningAmount: this.state.awnings.length > 1 ? this.state.awnings.reduce((a, b) => a[11]*a[10] + b[11]*b[10]) : (this.state.awnings.length > 0 ? this.state.awnings[0][11]*this.state.awnings[0][10] : 0)
      })
      });    
    }
    //----------------------------
    handleResetCart = () => {
      this.setState({   
        awnings: [],
        awningAmount: 0 
      },() =>{
        localStorage.setItem('awnings', JSON.stringify(this.state.awnings))
      });
    }
    
    //----------------------------
    handleAwningArray = newawning => {
      this.setState(state => {
        const awnings = [...state.awnings, newawning];
  
        return {
          awnings,
        };
      },() => {
        localStorage.setItem('awnings', JSON.stringify(this.state.awnings))
        this.setState({
        awningAmount: this.state.awnings.length > 1 ? this.state.awnings.reduce((a, b) => a[11]*a[10] + b[11]*b[10]) : (this.state.awnings.length > 0 ? this.state.awnings[0][11]*this.state.awnings[0][10] : 0)
      })
      });
    }
    //------------------------
    handleStartClick = () => {
      if(this.state.contactName !== "" && this.state.contactEmail !== "")
      {
        var data = new FormData();
        data.append("name", this.state.contactName);
        data.append("email", this.state.contactEmail);
        data.append("message", "Company: "+this.state.contactCompany+" Phone"+ this.state.contactPhone);
        fetch("https://dev.thecanvasmart.com/awning-repair/api/email", {
            method: 'POST', 
            body: data, 
            headers:myHeaders
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((response) =>{
          console.log(response)
        })
      }
      this.setState(() => ({
        toNewAwning: true
      }))
    }
    //-----------------
    goBackToInitial = () => {
      
      this.setState(() => ({
        toNewAwning: false
      }))
    }
    
    //-----------------------
    render(){
        return(
        <MuiThemeProvider theme={theme}>
            <Router>
                <div>
                    <AppBar items={this.state.awnings}/>
                    <main >
                        <Route exact path="/awning-recover/" render={()=><HomeLayout {...this.state}  onClose={this.handleClose}  onClick={this.handleClickOpen} handleChangeText={this.handleChangeText} handleStartClick={this.handleStartClick}/> }  />
                        <Route path="/awning-recover/contact" component={ContactForm} />
                        <Route path="/awning-recover/cart" render={() => <Cart items={this.state.awnings} totalAwnings={this.state.awningAmount} handleAwningArray={this.handleAwningArray} handleChange={this.handleChange} handleAwningDelete={this.handleAwningDelete} handleResetCart={this.handleResetCart} />}/>
                        <Route path="/awning-recover/new-request" render={() => <CreateRequest {...this.state} goBackToInitial={this.goBackToInitial} handleAwningArray={this.handleAwningArray} />}/>
                    </main>
                </div>
            </Router>
        </MuiThemeProvider>
        )
    }
}

export default Home