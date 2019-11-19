import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Radio from '@material-ui/core/Radio';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';

const styles = theme => ({
  roota: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: 20,
    alignItems: 'center',
    width: '50%',
    [theme.breakpoints.up('lg')]: {
           width: '35%',
    },
  },
  gridList: {
    width: '100%',
    height: 400,
    [theme.breakpoints.up('md')]: {
           height: 232,
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function FrameOptionsLayout(props) {
  const { classes,   selectedFrameType, handleChange, width } = props;
  //console.log(cols)
  let n_columns = (width === 'xs' || width === 'sm') ? 2 : 2;

  return ( 
    <div className={classes.roota}>
      
        
        {props.hasValance ? 
          <GridList cellHeight={216} className={classes.gridList} cols={2}>
          <GridListTile key="1">
            <img src={'https://dev.thecanvasmart.com/awning-recover/dist/images/1.jpg'} alt={"Style #1"} />
            <GridListTileBar
              title="Style #1"
              titlePosition='top'
              actionIcon={
                <Radio
                  checked={selectedFrameType == 1 ? true : false}
                  onChange={handleChange("selectedFrameType")}
                  value={1}
                  color="primary"
                  name="radio-button-demo"
                  icon={<CheckBoxOutlineBlank  />}
                  checkedIcon={<CheckBox  />}
                  classes={{
                    root: classes.icon
                  }}
                />
              }
            />
          </GridListTile>
         
          <GridListTile key="3">
            <img src={'https://dev.thecanvasmart.com/awning-recover/dist/images/3.jpg'} alt={"Style #3"} />
            <GridListTileBar
              title="Style #3"
              titlePosition='top'
              actionIcon={
                <Radio
                  checked={selectedFrameType == 3 ? true : false}
                  onChange={handleChange("selectedFrameType")}
                  value={3}
                  color="primary"
                  name="radio-button-demo"
                  icon={<CheckBoxOutlineBlank  />}
                  checkedIcon={<CheckBox  />}
                  classes={{
                    root: classes.icon
                  }}
                />
              }
            />
          </GridListTile>
          </GridList>
          :
          <GridList cellHeight={216} className={classes.gridList} cols={2}>
           <GridListTile key="2">
            <img src={'https://dev.thecanvasmart.com/awning-recover/dist/images/2.jpg'} alt={"Style #2"} />
            <GridListTileBar
              title="Style #2"
              titlePosition='top'
              actionIcon={
                <Radio
                  checked={selectedFrameType == 2 ? true : false}
                  onChange={handleChange("selectedFrameType")}
                  value={2}
                  color="primary"
                  name="radio-button-demo"
                  icon={<CheckBoxOutlineBlank  />}
                  checkedIcon={<CheckBox  />}
                  classes={{
                    root: classes.icon
                  }}
                />
              }
            />
          </GridListTile>
          <GridListTile key="4">
            <img src={'https://dev.thecanvasmart.com/awning-recover/dist/images/4.jpg'} alt={"Style #4"} />
            <GridListTileBar
              title="Style #4"
              titlePosition='top'
              actionIcon={
                <Radio
                  checked={selectedFrameType == 4 ? true : false}
                  onChange={handleChange("selectedFrameType")}
                  value={4}
                  color="primary"
                  name="radio-button-demo"
                  icon={<CheckBoxOutlineBlank  />}
                  checkedIcon={<CheckBox  />}
                  classes={{
                    root: classes.icon
                  }}
                />
              }
            />
          </GridListTile>
          </GridList>
        }
       
     
    </div>
  );
}

FrameOptionsLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrameOptionsLayout);
