import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paperNo: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: theme.palette.text.secondary,
    margin: 15,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    },
  button: {
      marginTop: 20,
      
  }
});



function contactFormLayout(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Grid container   justify="center">
          <Grid item sm={12} md={8}>
            <Paper className={classes.paperNo}>
                <form className="mui-form">
                    <FormControl fullWidth>
                        <FormLabel component="legend">Get in contact with us</FormLabel>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                        required
                          id="name"
                          label="Name"
                          className={classes.textField}
                          value={props.name}
                          onChange={props.handleChange('name')}
                          margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                        required
                          id="email"
                          label="Email"
                          type="email"
                          className={classes.textField}
                          value={props.email}
                          onChange={props.handleChange('email')}
                          margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                        required
                          id="message"
                          label="Message"
                          multiline
                          className={classes.textField}
                          value={props.message}
                          onChange={props.handleChange('message')}
                          margin="normal"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <Button variant="contained" color="secondary" size="large" className={classes.button}>
                            Send
                            <Send className={classes.rightIcon} />
                        </Button>
                    </FormControl>
                </form>  
            </Paper>
          </Grid>
        </Grid>
    </div>
        
    
  );
}

contactFormLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(contactFormLayout);