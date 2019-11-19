import React  from 'react'
import PropTypes from 'prop-types';
import ImageModal from './imageModal';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';
import {   Link  } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask'
import {   Redirect } from 'react-router-dom'
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 15,
    backgroundColor: theme.palette.secondary.light,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#000000',
  },
  button:{
    textAlign: 'center',
    margin: '20px auto 5px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
       width: '33%',
    },
    display: 'flex',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  paperNo: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: theme.palette.text.secondary,
    margin: 15,
  },
  whiteColor: {
    color: 'white',
  },
  fiftyFormControl: {
    width: '50%',
  },
   textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

    },
  link:{
    color: theme.palette.secondary.dark
  }
});
const img1 = {
  src:  'http://via.placeholder.com/350x155',
  title: 'Pipe style awning'
}
const img2 = {
  src:  'http://via.placeholder.com/350x150',
  title: 'Standard awing frame'
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function HomeLayout(props){
    const { classes,open, onClose, onClick, imageSrc, imageTitle, contactName} = props;

    
  return (
    <div className={classes.root}>
      {props.toNewAwning && <Redirect to='/awning-recover/new-request' />}
      <Grid container justify="center">
        <Grid item  sm={12} md={8}>
          <Paper className={classes.paper}>
            <Typography variant="title" gutterBottom className={classes.whiteColor}>Welcome to the number one spot on the internet to get your existing awning fabric replaced.  If you have a little bit of DIY spirit and can handle a tape measure then you can get a beautiful recover for your awning for a lot less money.  We use the best exterior marine and awning grade materials available, Sunbrella and Patio 500 Vinyl. Rest assured that you will be backed by Custom Canvas Structures, Inc. which has been producing quality awnings, shade structures and more since 1985.</Typography>
          </Paper>
        </Grid>
        <Grid container   justify="center">
          <Grid item sm={12} md={8}>
            <Paper className={classes.paperNo}>
             <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="contactName"
                      label="Name"
                      className={classes.textField}
                      value={contactName}
                      onChange={props.handleChangeText('contactName')}
                      margin="normal"
                    />
                </FormControl>
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="company"
                      label="Company"
                      className={classes.textField}
                      value={props.contactCompany}
                      onChange={props.handleChangeText('contactCompany')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="email"
                      label="Email"
                      className={classes.textField}
                      value={props.contactEmail}
                      type="email"
                      onChange={props.handleChangeText('contactEmail')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="maskExample"
                      label="Phone"
                      className={classes.textField}
                      margin="normal"
                      InputProps={{
                        inputComponent: TextMaskCustom,
                        value: props.contactPhone,
                        onChange: props.handleChangeText('contactPhone'),
                      }}
                    />
                    
                </FormControl>
                <Button  onClick={props.handleStartClick} variant="contained" size="large" color="secondary" className={classes.button}>
                Get started
                <NavigateNext className={classes.rightIcon}/>
              </Button>
            </Paper>  
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

HomeLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(HomeLayout)