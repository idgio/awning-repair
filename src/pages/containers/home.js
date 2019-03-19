import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import AppBar from '../components/appBar'
import ContactForm  from './contactForm'
import CreateRequest  from './createRequest'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {  BrowserRouter as Router, Route } from 'react-router-dom'

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


class Home extends Component {
    state = {
      open: false,
      imageSrc: null,
      imageTitle: null,
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
    render(){
        return(
        <MuiThemeProvider theme={theme}>
            <Router>
                <div>
                    <AppBar />
                    <main >
                        <Route exact path="/awning-recover/" render={()=><HomeLayout {...this.state}  onClose={this.handleClose}  onClick={this.handleClickOpen}/>}  />
                        <Route path="/awning-recover/contact" component={ContactForm} />
                        <Route path="/awning-recover/new-request" component={CreateRequest} />
                    </main>
                </div>
            </Router>
        </MuiThemeProvider>
        )
    }
}

export default Home