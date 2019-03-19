import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {  BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import  createBrowserHistory from 'history/createBrowserHistory';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  noTextDeco: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
   img: {
        margin: '0 auto',
        marginBottom: 10,
        maxWidth: 202,
        height: 'auto',
        position: 'relative',
        marginTop: 10,
    }
});

const logo = {
  src:  'https://dev.thecanvasmart.com/images/thecanvasmartLogo.png',
  title: 'The Canvas Mart'
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    
        
            <div className={classes.root}>
              
                  <AppBar position="static" color="primary">
                    <Grid container justify="center">
                      <Grid item  sm={12} md={8}>
                        <Toolbar>
                          
                          <Typography variant="title" color="inherit" className={classes.flex}>
                            <Link to="/awning-recover/" className={classes.noTextDeco}>
                              <img src={logo.src} alt={logo.title} className={classes.img}/>
                            </Link>
                          </Typography>
                            <div>
                              <Button component='a'	 href="https://dev.thecanvasmart.com/" className={classes.noTextDeco}>
                                Home
                              </Button>
                              <Button component={Link} to="/awning-recover/contact" className={classes.noTextDeco}>
                                Contact
                              </Button>
                            </div>
                        </Toolbar>
                      </Grid>
                    </Grid>
                  </AppBar>
                
            </div>

    
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);