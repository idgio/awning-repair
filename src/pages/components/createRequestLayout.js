import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paperNo: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    margin: 15,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  fiftyFormControl: {
    width: '50%',
  },
  thirtyFormControl: {
      width: '33%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    },
  button: {
      marginTop: 20,
      
  }
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}
TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function CreateRequestLayout(props) {
  const { classes, DetailsCreateRequestLayout, handleClickSave } = props;
  return (
    <div className={classes.root}>
        <Grid container   justify="center">
          <Grid item sm={12} md={8}>
            <Paper className={classes.paperNo}>
                <FormControl fullWidth>
                    <FormLabel component="legend">Fill the following</FormLabel>
                </FormControl>
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="name"
                      label="Name"
                      className={classes.textField}
                      value={props.name}
                      onChange={props.handleChange('name')}
                      margin="normal"
                    />
                </FormControl>
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="company"
                      label="Company"
                      className={classes.textField}
                      value={props.company}
                      onChange={props.handleChange('company')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.fiftyFormControl}>
                    <TextField
                      id="email"
                      label="Email"
                      className={classes.textField}
                      value={props.email}
                      type="email"
                      onChange={props.handleChange('email')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.fiftyFormControl}>
                    <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
                    <Input
                        value={props.phone}
                        onChange={props.handleChange('phone')}
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom}
                        id="phone"
                        className={classes.textField}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                      id="shippingAddress"
                      label="Shipping Address"
                      className={classes.textField}
                      value={props.shippingAddress}
                      onChange={props.handleChange('shippingAddress')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.thirtyFormControl}>
                    <TextField
                      id="state"
                      label="State"
                      className={classes.textField}
                      value={props.state}
                      onChange={props.handleChange('state')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.thirtyFormControl}>
                    <TextField
                      id="city"
                      label="City"
                      className={classes.textField}
                      value={props.city}
                      onChange={props.handleChange('city')}
                      margin="normal"
                    />
                </FormControl> 
                <FormControl className={classes.thirtyFormControl}>
                    <TextField
                      id="zip"
                      label="Zip"
                      className={classes.textField}
                      value={props.zip}
                      onChange={props.handleChange('zip')}
                      margin="normal"
                    />
                </FormControl>
                
                <Grid container   justify="flex-start">
                    <Grid item sm={6} md={4}>
                        <DetailsCreateRequestLayout handleClickSave={handleClickSave} />
                    </Grid>
                    
                </Grid>
                <FormControl fullWidth>
                    <Button variant="contained" color="secondary" size="large" className={classes.button}>
                        Send
                        <Send className={classes.rightIcon} />
                    </Button>
                </FormControl>
            </Paper>
            
          </Grid>
        </Grid>
    </div>
        
    
  );
}

CreateRequestLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateRequestLayout);