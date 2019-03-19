import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = {
    innerDiv: {
        padding: '0 24px'
    },
    img: {
        margin: '0 auto',
        display: 'flex',
        marginBottom: 10,
        maxWidth: '100%',
        height: 'auto',
        position: 'relative',
    }
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, open, imageTitle, imageSrc  } = this.props;   

    return (
      <Dialog onClose={this.handleClose} open={open}  fullWidth TransitionComponent={Transition} aria-labelledby="simple-dialog-title" >
        <DialogTitle id="simple-dialog-title">{imageTitle}</DialogTitle>
        <div className={classes.innerDiv}>
            <img src={imageSrc} alt={imageTitle} className={classes.img}/>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default withStyles(styles)(SimpleDialog);