import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ValanceOptionsLayout from './valanceOptionsLayout'
import Input from '@material-ui/core/Input'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import ScrollableFabric from './scrollableFabric'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FrameOptionsLayout from './frameOptionsLayout'
import {   Link  } from 'react-router-dom'
import DropZone from './dropZone'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 25,
    marginBottom: 25
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    },
  button: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit*4,
  },
  
  paddingLeftPane: {
   paddingTop: 10,
   paddingBottom: 10,
   paddingLeft: 30,
   paddingRight: 25,
  },
  fiftyFormControl: {
    width: '100%',
    marginTop: 16,
    [theme.breakpoints.up('md')]: {
           width: '50%',
    },
     display: 'inline-flex',
    position: 'relative',
  },
  twentyfiveFormControl:{
    width: '100%',
    marginTop: 16,
    display: 'inline-flex',
    position: 'relative',
   
    
  },
  img: {
        margin: '0 auto',
        display: 'flex',
        marginBottom: 10,
        maxWidth: '100%',
        height: 'auto',
        position: 'relative',
    },
  centerme: {
      textAlign: 'center'
  },
  link:{
    color: theme.palette.secondary.dark
  }
});
const inputSettings = {min: 1};
function getSteps() {
  return ['Considerations','Materials', 'Dimensions','Frame','Upload','Panels', 'Valance', 'Fabric','Resume'];
}

                // <ListItem>
                //   <Avatar>
                //     <PriorityHigh />
                //   </Avatar>
                //   <ListItemText primary="They must not be staple type awning.  Usually you can see a plastic strip overtop of where the staples are and you will not see any rope of screws holding the fabric to the frame. " />
                // </ListItem>
                // <ListItem>
                //   <Avatar>
                //     <PriorityHigh />
                //   </Avatar>
                //   <ListItemText primary="Check this box if your awning is not a water pipe, screw pipe or staple style awning" />
                 
                // </ListItem>
                // <ListItem>
                //   <Avatar>
                //     <DoneOutline />
                //   </Avatar>
                //   <ListItemText primary="They must be what we call a standard awing frame" />
                  
                // </ListItem>
                // <ListItem>
                //   <Avatar>
                //     <PriorityHigh />
                //   </Avatar>
                //   <ListItemText primary="They must be attached using screws or rope laced on from the bottom (If you look under your awing and you see rope being used to attach the awning to the frame your good to go.  If you need assistance with this please contact us at 813-992-5143 and we will walk you through the process)" />
                // </ListItem>
                // <ListItem>
                //   <Avatar>
                //     <PriorityHigh />
                //   </Avatar>
                //   <ListItemText primary="Must have no cut outs or notches in the awning frame or fabric." />
                // </ListItem>
function getStepContent(step, classes, props) {
  switch (step) {
   
    case 0: 
      return <div>
         <Typography variant="subheading" gutterBottom>If your existing awning has the following characteristics, with just a few measurements we can produce a beautiful cover for your existing awning. In order for us to be able to replace your awning fabric your existing awning must meet the following criteria:
              </Typography>
              <List>
                <ListItem  >
                  <Checkbox
                    onChange={props.handleToogleChange('pipeType')}
                    checked={props.pipeType}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary="Check this if your awning is not a water pipe, screw pipe or staple style awning" />
                </ListItem>
                <ListItem  >
                  <Checkbox
                    onChange={props.handleToogleChange('frameType')}
                    checked={props.frameType}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary="Check this if your awning is a welded steel or aluminum frame" />
                </ListItem>
                <ListItem  >
                  <Checkbox
                    onChange={props.handleToogleChange('curveType')}
                    checked={props.curveType}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary="Check this if your awing is a standard awning frame with no curves or cut outs" />
                </ListItem>
                <ListItem  >
                  <Checkbox
                    onChange={props.handleToogleChange('lacedType')}
                    checked={props.lacedType}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary="Check this if your awning fabric is laced to the frame with rope" />
                </ListItem>
                <ListItem  >
                  <Checkbox
                    onChange={props.handleToogleChange('heldType')}
                    checked={props.heldType}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary="Check this if your awning fabric is held on the frame by small sheet metal or self-tapping screws." />
                </ListItem>
              </List>
              <Typography variant="body1" gutterBottom>
                If you need assistance with this please contact us at <a className={classes.link} href="tel:+813-992-5143">813-992-5143</a> and we will walk you through the process.
              </Typography>
              
        
      </div>
    case 1: 
      return <FormControl fullWidth>
                      <InputLabel className={classes.textField}  htmlFor="framing">My Existing Frame made from</InputLabel>
                      <Select
                        value={props.framing}
                        onChange={props.handleChange('framing')}
                        className={classes.textField} 
                        inputProps={{
                            name: 'age',
                            id: 'framing',
                          }}
                        >
                        <MenuItem value={0} disabled>
                          Select One
                        </MenuItem>
                        <MenuItem value='1" Square tubing'>1" Square tubing</MenuItem>
                        <MenuItem value='3/4" Square Tubing'>3/4" Square Tubing</MenuItem>
                        <MenuItem value='1" Round pipe, welded not screwed'>1" Round pipe, welded not screwed</MenuItem>
                        <MenuItem value='3/4" Round pipe, welded not screwed'>3/4" Round pipe, welded not screwed</MenuItem>
                      </Select>
                    </FormControl>;
    case 2:
      return (<div >
      <Grid item sm={12}>
        {props.hasValance ? 
        (<img className={classes.img} src="https://dev.thecanvasmart.com/awning-recover/dist/images/dimensions.2ee966fcde51f9b32fc7a3d224c02989.jpg"/>)
        :
        (<img className={classes.img} src="https://dev.thecanvasmart.com/awning-recover/dist/images/dimensions.2ee966fcde52f9b32fc7a3d224c02989.jpg"/>)
        }
      </Grid>
       <FormControl fullWidth>
                      <InputLabel className={classes.textField} htmlFor="widthInch">A Width in inches </InputLabel>
                      <Input
                        id="widthInch"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.widthInch}
                        onChange={props.handleChange('widthInch')}
                        margin="dense"
                        
                        
                      />
                    </FormControl>
        <FormControl fullWidth>
                      <InputLabel className={classes.textField} htmlFor="drop">B Height in inches</InputLabel>
                      <Input
                        id="drop"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.drop}
                        onChange={props.handleChange('drop')}
                        margin="dense"
                        
                        
                      />
                    </FormControl>
        <FormControl fullWidth>
                      <InputLabel className={classes.textField} htmlFor="projection">C Projection in inches </InputLabel>
                      <Input
                        id="projection"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.projection}
                        onChange={props.handleChange('projection')}
                        margin="dense"
                        
                        
                      />
                    </FormControl>
        <div className={classes.twentyfiveFormControl}>
          <FormControlLabel 
            control={
              <Checkbox
                checked={props.hasValance}
                onChange={props.handleToogleChange('hasValance')}
                
                color="primary"
              />
            }
            label="Check here if the awning have a flat vertical valance or this is sometimes referred to as a sign band?"
             labelPlacement="start"
             className={classes.textField}
          />
        </div>  
         {props.hasValance ? (<FormControl fullWidth>
                            <InputLabel className={classes.textField} htmlFor="valanceD">D Valance Height in Inch</InputLabel>
                            <Input
                              id="valanceD"
                              inputProps= {inputSettings}
                              className={classes.textField}
                              value={props.valanceD}
                              onChange={props.handleChange('valanceD')}
                              margin="dense"
                            />
                            </FormControl>
        ) : (null)}
      </div>)
    case 3:
      return <div><FrameOptionsLayout selectedFrameType={props.selectedFrameType} handleChange={props.handleChange} width={props.width}/></div>
    case 4:
      return <div><Typography variant="subheading" gutterBottom>
                      Please make sure to include the following pictures: Front shot, side view and underneath, view of how the fabric is attached to the top of the frame of your existing awning
                    </Typography>
                    <DropZone handleChangeFiles={props.handleFilesArray} sendFiles={props.sendFiles}/></div>
    case 5:
      return <FormControl fullWidth>
                      <InputLabel className={classes.textField}  htmlFor="panels">Does your Awning have side panels ?</InputLabel>
                      <Select
                        value={props.panels}
                        onChange={props.handleChange('panels')}
                        className={classes.textField} 
                        inputProps={{
                            name: 'age',
                            id: 'panels',
                          }}
                        >
                        <MenuItem value={0} disabled>
                          Select One
                        </MenuItem>
                        <MenuItem value="My awning has wings on both ends which means there is fabric on the left and right hand sides of the awning.">My awning has wings on both ends which means there is fabric on the left and right hand sides of the awning.</MenuItem>
                        <MenuItem value="My awning only has a left wing which means there is fabric on the left hand side of the awning.">My awning only has a left wing which means there is fabric on the left hand side of the awning.</MenuItem>
                        <MenuItem value="My awning only has a right wing which means there is fabric on the right hand side of the awning.">My awning only has a right wing which means there is fabric on the right hand side of the awning.</MenuItem>
                        <MenuItem value="My awning has no wings which means there is no fabric on the left or right sides of the awning.">My awning has no wings which means there is no fabric on the left or right sides of the awning.</MenuItem>
                      </Select>
                    </FormControl>;
    case 6:
      return <div><FormControl fullWidth>
                      <InputLabel className={classes.textField}  htmlFor="valance">Does your Awning have side valance?</InputLabel>
                      <Select
                        value={props.valance}
                        onChange={props.handleChange('valance')}
                        className={classes.textField} 
                        inputProps={{
                            name: 'age',
                            id: 'valance',
                          }}
                        >
                        <MenuItem value={0} disabled>
                          Select One
                        </MenuItem>
                        <MenuItem value="My Awning has no valance, at the bottom of the slope the awning stops.">My Awning has no valance, at the bottom of the slope the awning stops.</MenuItem>
                        <MenuItem value="My Awning has a rigid Valance (Which means that the fabric does not hang freely down and flap in the breeze, It wraps under the awning and gets laced to a bar located on the back side of the valance frame)">My Awning has a rigid Valance (Which means that the fabric does not hang freely down and flap in the breeze, It wraps under the awning and gets laced to a bar located on the back side of the valance frame)  </MenuItem>
                        <MenuItem value="My Awning has a soft Valance with a straight hem (Which means that the fabric does hangs freely down and can flap in the breeze, a flap of fabric does wrap under the awning and gets laced to a bar located on the back side of the valance frame)">My Awning has a soft Valance with a straight hem (Which means that the fabric does hangs freely down and can flap in the breeze, a flap of fabric does wrap under the awning and gets laced to a bar located on the back side of the valance frame)  </MenuItem>
                        <MenuItem value="My Awning has a soft Valance with a straight hem with a lace band that ties to the bottom frame member">My Awning has a soft Valance with a straight hem with a lace band that ties to the bottom frame member</MenuItem>
                        <MenuItem value="My awning has a scallop across the bottom of my soft valance">My awning has a scallop across the bottom of my soft valance</MenuItem>
                      </Select>
                    </FormControl>
                    {props.valance === "My Awning has a rigid Valance (Which means that the fabric does not hang freely down and flap in the breeze, It wraps under the awning and gets laced to a bar located on the back side of the valance frame)" || props.valance === "My Awning has a soft Valance with a straight hem (Which means that the fabric does hangs freely down and can flap in the breeze, a flap of fabric does wrap under the awning and gets laced to a bar located on the back side of the valance frame)" ? (
                    <FormControl fullWidth>
                            <InputLabel className={classes.textField} htmlFor="valanceDim">Dimension between the bottom of the frame and the bottom of the lace bar</InputLabel>
                            <Input
                              id="valanceDim"
                              inputProps= {inputSettings}
                              className={classes.textField}
                              value={props.valanceDim}
                              onChange={props.handleChange('valanceDim')}
                              margin="dense"
                            />
                            </FormControl>
                    
                    ) : (props.valance === "My awning has a scallop across the bottom of my soft valance" ? (<ValanceOptionsLayout selectedValanceType={props.selectedValanceType} handleChange={props.handleChange} width={props.width}/>) : (null))}
                    </div> ;
    case 7:
      return  <ScrollableFabric  selectedFabric={props.selectedFabric} handleChangeFabric={props.handleChangeFabric} cols={props.width}/>;
    case 8:
      return <Grid container   justify="center">
                <Grid item sm={12} md={6} >
                  <p>Frame: {props.framing} </p>
                  <img className={classes.img} src="https://dev.thecanvasmart.com/awning-recover/dist/images/dimensions.2ee966fcde51f9b32fc7a3d224c02989.jpg"/>
                  <p>A width: {props.widthInch} "</p>
                  <p>B height: {props.drop} "</p>
                  <p>C projection: {props.projection} "</p>
                  {props.hasValance ? (<p>D valance: {props.valanceD} "</p>) : (<p>D valance: No Valance</p>)}
                  
                </Grid>
                <Grid item sm={12} md={6} >
                <p>Panels: {props.panels}</p>
                  <p>Valance: {props.valance}</p>
                  {props.valance === "My Awning has a rigid Valance (Which means that the fabric does not hang freely down and flap in the breeze, It wraps under the awning and gets laced to a bar located on the back side of the valance frame)" || props.valance === "My Awning has a soft Valance with a straight hem (Which means that the fabric does hangs freely down and can flap in the breeze, a flap of fabric does wrap under the awning and gets laced to a bar located on the back side of the valance frame)" ? (<p>Dimensions between bottom frame an bottom lace bar: {props.valanceDim} "</p>) : 
                  (props.valance === "My awning has a scallop across the bottom of my soft valance" ? (<p>Valance style: Style #{props.selectedValanceType}</p>) : (null))}
                  <p>Fabric: {props.selectedFabric}</p>
                  <div style={{width: '100%',backgroundImage:'url('+props.selectedFabricSrc+')', height: 50, marginBottom: 10}}> </div>                 
                <FormControl fullWidth>
                   <InputLabel className={classes.textField} htmlFor="quantityItem">Quantity</InputLabel>
                        <Input
                          id="quantityItem"
                          inputProps= {inputSettings}
                          className={classes.textField}
                          value={props.quantityItem}
                          onChange={props.handleChange('quantityItem')}
                          margin="dense"
                          type="number"
                        />
                  </FormControl>
                </Grid>
              
              
                 
                  
                
              
            </Grid>;
    default:
      return 'Unknown step';
  }
}

class MainStepper extends React.Component {
  
  state = {
    activeStep: 0,
    
    skipped: new Set(),
  };
  
  isStepOptional = step => step === 1;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    const steps = getSteps();
    if(activeStep == steps.length - 1)
    {
      this.props.handleAddToCart()
      console.log('add to cart');
    }
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  
  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
  
    return (
      <div className={classes.root}>
       <Grid container   justify={ this.props.width == 'sm' ? 'flex-start' : 'center'}>
          <Grid item xs={12} sm={12} md={12} lg={10} style={{textAlign:'right', paddingRight: 24, fontSize: '1.20em'}}>
           $ {(this.props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={10}>
          
            <Stepper activeStep={activeStep} orientation={ this.props.width == 'sm' ? 'vertical' : 'horizontal'}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};
               
                if (this.isStepSkipped(index)) {
                  props.completed = false;
                }
                return (
                  <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div className={classes.centerme}> 
                 <Button  component={Link} to="/awning-recover/cart"  variant="contained" color="secondary" className={classes.button}>
                    Go to shopping cart
                  </Button>
                 <Button onClick={this.handleReset} variant="contained" color="primary" className={classes.button}>
                   Add different size awning 
                  </Button>
                 
                </div>
              ) : (
                <div >
                <Grid container className={classes.paddingLeftPane} justify="center">
                    <Grid item xs={12} sm={12} md={12} >
                     {getStepContent(activeStep,classes, this.props)}
                    </Grid>
                </Grid>
                  <div className={classes.centerme}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Add to cart' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            </Grid>
            </Grid>
      </div>
    );
  }
}

MainStepper.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
};

export default compose(withStyles(styles),withWidth())(MainStepper);
