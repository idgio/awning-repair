import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Send from '@material-ui/icons/Send';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask'
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

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
   fiftyFormControl2: {
    width: '50%',
    paddingTop: 16,
  },
  thirtyFormControl: {
      width: '33%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    },
  phoneLabel:{
    paddingTop: 22,
    paddingLeft: 11,
  },
  button: {
      marginTop: 20,
      
  },
  card: {
    paddingLeft: '1%',
    paddingRight: '1%',
    paddingTop: 15,
  }
});

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

function CreateRequestLayout(props) {
  const { classes, DetailsCreateRequestLayout, handleAwningDelete, awnings } = props;
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
                    <TextField
                      id="maskExample"
                      label="Phone"
                      className={classes.textField}
                      margin="normal"
                      InputProps={{
                        inputComponent: TextMaskCustom,
                        value: props.phone,
                        onChange: props.handleChange('phone'),
                      }}
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
                   
                        {awnings.length > 0 ?  
                    
                      awnings.map((awning, index) => (
                      <Grid item sm={6} md={4} className={classes.card} key={awning["9"]}>
                          <Card  >
                            
                              <CardMedia
                                component="img"
                                alt={awning["8"]}
                                height="80"
                                image={awning["9"]}
                                title={awning["8"]}
                              />
                              <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Width: {awning["0"]}" | Drop: {awning["1"]}" | Valance: {awning["2"]}" | Projection: {awning["3"]}" ...
                                </Typography>
                               
                              </CardContent>
                               <CardActions>
                                  <Button size="small" color="primary" onClick={() =>handleAwningDelete(index)}>
                                    Delete
                                  </Button>
                                </CardActions>
                          </Card>
                      </Grid>
                        ))
                    
                     : ''}
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <DetailsCreateRequestLayout handleAwningArray={props.handleAwningArray} handleFilesArray={props.handleFilesArray} />
                    </Grid>
                    
                </Grid>
                <FormControl fullWidth>
                    <Button variant="contained" color="secondary" size="large" className={classes.button} onClick={props.handleClickSave} disabled={props.loading}>
                        Send
                        <Send className={classes.rightIcon} />
                    </Button>
                </FormControl>
                <LinearProgress variant="determinate" value={props.completed} />
            </Paper>
            
          </Grid>
        </Grid>
         
        <Snackbar
          open={props.openAfterDone}
          TransitionComponent={Transition}
          onClose={props.handleCloseAfterDone}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">We recieved your request, one of our coworkers will contact you soon</span>}
        />
    </div>
        
    
  );
}

CreateRequestLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateRequestLayout);