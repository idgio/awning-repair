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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: 20,
  },
  gridList: {
    width: '100%',
    height: 600,
    [theme.breakpoints.up('md')]: {
           height: 200,
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
function ValanceOptionsLayout(props) {
  const { classes,   selectedValanceType, handleChange, width } = props;
  //console.log(cols)
  let n_columns = (width === 'xs' || width === 'sm') ? 2 : 5;

  return ( 
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={n_columns}>
        
        
          <GridListTile key="1">
            <img src={'https://via.placeholder.com/180'} alt={"Style #1"} />
            <GridListTileBar
              title="Style #1"
              subtitle={<span>Description</span>}
              actionIcon={
                <Radio
                  checked={selectedValanceType == 1 ? true : false}
                  onChange={handleChange("selectedValanceType")}
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
          <GridListTile key="2">
            <img src={'https://via.placeholder.com/180'} alt={"Style #2"} />
            <GridListTileBar
              title="Style #2"
              subtitle={<span>Description</span>}
              actionIcon={
                <Radio
                  checked={selectedValanceType == 2 ? true : false}
                  onChange={handleChange("selectedValanceType")}
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
          <GridListTile key="3">
            <img src={'https://via.placeholder.com/180'} alt={"Style #3"} />
            <GridListTileBar
              title="Style #3"
              subtitle={<span>Description</span>}
              actionIcon={
                <Radio
                  checked={selectedValanceType == 3 ? true : false}
                  onChange={handleChange("selectedValanceType")}
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
          <GridListTile key="4">
            <img src={'https://via.placeholder.com/180'} alt={"Style #4"} />
            <GridListTileBar
              title="Style #4"
              subtitle={<span>Description</span>}
              actionIcon={
                <Radio
                  checked={selectedValanceType == 4 ? true : false}
                  onChange={handleChange("selectedValanceType")}
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
          <GridListTile key="5">
            <img src={'https://via.placeholder.com/180'} alt={"Style #5"} />
            <GridListTileBar
              title="Style #5"
              subtitle={<span>Description</span>}
              actionIcon={
                <Radio
                  checked={selectedValanceType == 5 ? true : false}
                  onChange={handleChange("selectedValanceType")}
                  value={5}
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
    </div>
  );
}

ValanceOptionsLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ValanceOptionsLayout);
