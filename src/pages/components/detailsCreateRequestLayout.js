import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import ImageModal from './imageModal';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Save from '@material-ui/icons/Save';
import ScrollableFabric from './scrollableFabric'
import DropZone from './dropZone'
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paperNo: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 15,
    cursor: 'pointer',
  },
  paperInner: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    margin: 15,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    },
  fiftyFormControl: {
    width: '50%',
    marginTop: 16,
  },
  thirtyFormControl: {
    width: '33%',
    marginTop: 16,
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  button: {
      marginTop: 20,
      
  }
});

const inputSettings = {min: 1};
const widthImg = {
  src:  'http://via.placeholder.com/350x155',
  title: 'How to measure width'
}
const dropImg = {
  src:  'http://via.placeholder.com/350x150',
  title: 'How to measure drop height'
}
const valanceImg = {
  src:  'http://via.placeholder.com/350x155',
  title: 'How to measure valance height'
}
const projectionImg = {
  src:  'http://via.placeholder.com/350x150',
  title: 'How to measure projection'
}
const lacebarImg = {
  src:  'http://via.placeholder.com/350x150',
  title: 'How to measure lace bar height'
}

function DetailsCreateRequestLayout(props) {
  const { classes, onOpen, onClose, open, handleClickOpenInner, imageSrc, imageTitle, handleCloseInner, openInner, handleSaveandClose } = props;
  
  return (
    <div >

            <Paper className={classes.paperNo} elevation={5} onClick={onOpen}>
                <AddIcon />
                <Typography align="center">
                    Add new awning for recovery
                </Typography>
            </Paper>

        <Dialog
          fullScreen
          open={open}
          onClose={onClose}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={onClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                New Awning Repair
              </Typography>
              
            </Toolbar>
          </AppBar>
          <div className={classes.root}>
            <Grid container   justify="center">
              <Grid item sm={12} md={8}>
                  <Paper className={classes.paperInner} >
                    <FormControl fullWidth>
                        <FormLabel component="legend">Fill the awning info</FormLabel>
                    </FormControl>
                    <FormControl className={classes.thirtyFormControl}>
                      <InputLabel className={classes.textField} htmlFor="width">Width in Inch</InputLabel>
                      <Input
                        id="width"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.width}
                        onChange={props.handleChange('width')}
                        margin="dense"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label="Details"  onClick={handleClickOpenInner.bind(this,widthImg)}>
                              <InsertPhoto />
                            </IconButton>
                          </InputAdornment>
                        }
                        
                      />
                    </FormControl>
                    <FormControl className={classes.thirtyFormControl}>
                      <InputLabel className={classes.textField} htmlFor="drop">Drop in Inch</InputLabel>
                      <Input
                        id="drop"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.drop}
                        onChange={props.handleChange('drop')}
                        margin="dense"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label="Details"  onClick={handleClickOpenInner.bind(this,dropImg)}>
                              <InsertPhoto />
                            </IconButton>
                          </InputAdornment>
                        }
                        
                      />
                    </FormControl>
                    <FormControl className={classes.thirtyFormControl}>
                      <InputLabel className={classes.textField} htmlFor="valance">Valance Height in Inch</InputLabel>
                      <Input
                        id="valance"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.valance}
                        onChange={props.handleChange('valance')}
                        margin="dense"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label="Details"  onClick={handleClickOpenInner.bind(this,valanceImg)}>
                              <InsertPhoto />
                            </IconButton>
                          </InputAdornment>
                        }
                        
                      />
                    </FormControl>
                    <FormControl className={classes.fiftyFormControl}>
                      <InputLabel className={classes.textField} htmlFor="projection">Projection</InputLabel>
                      <Input
                        id="projection"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.projection}
                        onChange={props.handleChange('projection')}
                        margin="dense"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label="Details"  onClick={handleClickOpenInner.bind(this,projectionImg)}>
                              <InsertPhoto />
                            </IconButton>
                          </InputAdornment>
                        }
                        
                      />
                    </FormControl>
                    <FormControl className={classes.fiftyFormControl}>
                      <InputLabel className={classes.textField}  htmlFor="framing">Framing made of</InputLabel>
                      <Select
                        value={props.framing}
                        onChange={props.handleChange('framing')}
                        className={classes.textField} 
                        inputProps={{
                            name: 'age',
                            id: 'framing',
                          }}
                        >
                        <MenuItem value={10}>1" Square tubing</MenuItem>
                        <MenuItem value={20}>3/4" Square Tubing</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.fiftyFormControl}>
                      <InputLabel className={classes.textField} htmlFor="quantity">Quantity</InputLabel>
                      <Input
                        id="quantity"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.quantity}
                        onChange={props.handleChange('quantity')}
                        margin="dense"
                        type="number"
                        inputProps={inputSettings}
                      />
                    </FormControl>
                    <FormControl className={classes.fiftyFormControl}>
                      <InputLabel className={classes.textField} htmlFor="lacebar">Lace bar height in Inch</InputLabel>
                      <Input
                        id="lacebar"
                        inputProps= {inputSettings}
                        className={classes.textField}
                        value={props.lacebar}
                        onChange={props.handleChange('lacebar')}
                        margin="dense"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label="Details"  onClick={handleClickOpenInner.bind(this,lacebarImg)}>
                              <InsertPhoto />
                            </IconButton>
                          </InputAdornment>
                        }
                        
                      />
                    </FormControl>
                    <ScrollableFabric selectedFabric={props.selectedFabric}  handleChange={props.handleChangeFabric}/>
                     <Typography variant="subheading" gutterBottom>
                      Please make sure to include the following pictures: Front shot, side view and underneath, view of how the fabric is attached to the top of the frame of your existing awning
                    </Typography>
                    <DropZone handleChangeFiles={props.handleChangeFiles}/>
                    <FormControl fullWidth>
                        <Button onClick={handleSaveandClose} variant="contained" color="secondary" size="large" className={classes.button}>
                            <Save  />
                            Save
                        </Button>
                    </FormControl>
                    
                  </Paper>
              </Grid>
            </Grid>
          </div>
        </Dialog>
        <ImageModal open={openInner}  onClose={handleCloseInner} imageSrc={imageSrc} imageTitle={imageTitle}/>
    </div>
        
    
  );
}

DetailsCreateRequestLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsCreateRequestLayout);