import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import FabricGrid from './fabricGrid'

const styles = theme => ({
  root: {
    marginTop: 25,
    marginBottom: 25,
    maxWidth: '100%',
    flexGrow: 1,
    minHeight: 600
  },
  nextButtom: {
    float: 'right'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 'auto',
    maxWidth: '100%',
  },
});
let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmYzliYWIwMWJjODE0MjE5NTM3ZDYzMjNiMGFiYmIzODAyYWZhNzNmYWM1ZGU5MDg1NjA0MDZhZTgwYzFiMjM1NzE1ZTNkZTYwMzc5Yjg5In0.eyJhdWQiOiIxIiwianRpIjoiMWZjOWJhYjAxYmM4MTQyMTk1MzdkNjMyM2IwYWJiYjM4MDJhZmE3M2ZhYzVkZTkwODU2MDQwNmFlODBjMWIyMzU3MTVlM2RlNjAzNzliODkiLCJpYXQiOjE1NDM2MTQzNDUsIm5iZiI6MTU0MzYxNDM0NSwiZXhwIjoxNTc1MTUwMzQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mdqxa0HrBHMj0fros1hq0wurivLRdtvGIYo8Ll29uqU2_LANeVAbzRwvCmXh553bIBUFOaM5WDSzVgLUCvgW_au5VamZRy7_H6tUSxbdpEtxx-x0vqm3q0dsC7N9FlXxwu6p7oE1PsxwdzTim5rn7qX44DTkCyYeqC4U4yAMo69xluYLtFJ0GVQ_IeYag8aofc2Q3QTJsWa-tdsmKR-2vfGza2WPgYLaSqpgqx1bZl7fX8mK3JjdkSl3IKmGmVwgafU7wuymaBklLhKER3_K5IshEgE-pzsoEgDU7-pFnxaJF0iGJXSHtZnRMVGVDhUiG7enoJbKaku8r7QlpXyHB_jKvjCrErkIjKVQVaxmP67T_npVkabzedpEzutDIVCdoSKCw_IaEdyNd_a_VLCJOInGlznQljp--YCleVvRO_r1iXFC1QPKuaW3JiVYUeEcOyiUmyNsTTd1seHxU8ueb7r2gaH_FabPec3mZwHjBKLEnILJXQohw3GhB7rgUxHg5lQG4W8MAl3_ZpWFAnCrWF-_LyFNo5dRaoIHkubyCgIBN2ipkTq77JIeqEiYFvZjHR7ZgmqvozO8pOifOdcROVbCGdMRIvdSQ9n7AmnkneictXrWtjOSo511r5HzXm18fCi6fs6HZUK3tLqZDk-WHskP7uFEUn34CRZv_eqEYNM');
    myHeaders.append('Accept', 'application/json');
    
const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'no-cache' };
class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    error: null,
    isLoaded: false,
    data: null,
    last_page: null,
    next_page_url: null,
    prev_page_url: null
    
  };

  handleNext = () => {
    this.setState(prevState => ({isLoaded: false}));
    fetch(this.state.next_page_url, myInit)
      .then(response => response.json())
      .then(data => this.setState({ data: data.data.data, last_page: data.data.last_page, isLoaded : data.success, activeStep: data.data.current_page -1,  next_page_url: data.data.next_page_url, prev_page_url: data.data.prev_page_url}));
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({isLoaded: false}));
    fetch(this.state.prev_page_url, myInit)
      .then(response => response.json())
      .then(data => this.setState({ data: data.data.data, last_page: data.data.last_page, isLoaded : data.success, activeStep: data.data.current_page -1,  next_page_url: data.data.next_page_url, prev_page_url: data.data.prev_page_url}));
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };
  componentDidMount() {
    
      fetch('https://dev.thecanvasmart.com/awning-repair/api/fabrics', myInit)
      .then(response => response.json())
      .then(data => this.setState({ data: data.data.data, last_page: data.data.last_page, isLoaded : data.success, activeStep: data.data.current_page -1,  next_page_url: data.data.next_page_url, prev_page_url: data.data.prev_page_url}));
  }
  render() {
    const { classes, theme, selectedFabric, handleChange } = this.props;
    const { activeStep, data,last_page, isLoaded } = this.state;
    const maxSteps = last_page;
   

    if (!isLoaded) {
      return  <div className={classes.root}><p>Loading ...</p></div>
    }
    return (
      <div className={classes.root}>
        
          <FabricGrid fabricsData={data} selectedFabric={selectedFabric}  handleChange={handleChange} />
         
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1} className={classes.nextButtom}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>

            
          
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);