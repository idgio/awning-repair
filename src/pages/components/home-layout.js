import React  from 'react'
import PropTypes from 'prop-types';
import ImageModal from './imageModal';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PriorityHigh from '@material-ui/icons/PriorityHigh';
import DoneOutline from '@material-ui/icons/Done';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import {   Link  } from 'react-router-dom'
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
    width: '33%',
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
function HomeLayout(props){
    const { classes,open, onClose, onClick, imageSrc, imageTitle} = props;
    
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item  sm={12} md={8}>
          <Paper className={classes.paper}>
            <Typography variant="title" gutterBottom className={classes.whiteColor}>Welcome to the number one spot on the internet to get your existing awning fabric replaced.  If you have a little bit of DIY spirit and can handle a tape measure then you can get a beautiful recover for your awning for a lot less money.  We use the best exterior marine and awning grade materials available, Sunbrella and Patio 500 Vinyl. Rest assured that you will be backed by Custom Canvas Structures, Inc. which has been producing quality awnings, shade structures and more since 1985.</Typography>
          </Paper>
        </Grid>
        <Grid container   justify="center">
          <Grid item sm={12} md={8}>
            <Paper className={classes.paperNo}>
              <Typography variant="subheading" gutterBottom>If your existing awning has the following characteristics, with just a few measurements we can produce a beautiful cover for your existing awning. In order for us to be able to replace your awning fabric your existing awning must meet the following criteria:
              </Typography>
              <List>
                <ListItem>
                  <Avatar>
                    <PriorityHigh />
                  </Avatar>
                  <ListItemText primary="They must not be staple type awning.  Usually you can see a plastic strip overtop of where the staples are and you will not see any rope of screws holding the fabric to the frame. " />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <PriorityHigh />
                  </Avatar>
                  <ListItemText primary="The must not be a screw pipe style awning" />
                  <ListItemSecondaryAction>
                      <IconButton aria-label="Details"  onClick={onClick.bind(this,img1)}>
                        <InsertPhoto />
                      </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <Avatar>
                    <DoneOutline />
                  </Avatar>
                  <ListItemText primary="They must be what we call a standard awing frame" />
                  <ListItemSecondaryAction>
                      <IconButton aria-label="Details" onClick={onClick.bind(this,img2)}>
                        <InsertPhoto />
                      </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <Avatar>
                    <PriorityHigh />
                  </Avatar>
                  <ListItemText primary="They must be attached using screws or rope laced on from the bottom (If you look under your awing and you see rope being used to attach the awning to the frame your good to go.  If you need assistance with this please contact us at 813-992-5143 and we will walk you through the process)" />
                </ListItem>
              </List>
              <Typography variant="body1" gutterBottom>
                For other styles and shapes that utilize rope to attach the fabric to the frame call us at <a className={classes.link} href="tel:+813-992-5143">813-992-5143</a> to talk through options.
              </Typography>
              <Button  component={Link} to="/awning-recover/new-request" variant="contained" size="large" color="secondary" className={classes.button}>
                Get started
                <NavigateNext className={classes.rightIcon}/>
              </Button>
            </Paper>  
          </Grid>
        </Grid>
        <ImageModal open={open}  onClose={onClose} imageSrc={imageSrc} imageTitle={imageTitle}/>
      </Grid>
    </div>
  );
}

HomeLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(HomeLayout)