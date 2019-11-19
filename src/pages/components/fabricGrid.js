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
  },
  gridList: {
    width: '100%',
    height: 560,
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
function FabricGridList(props) {
  const { classes, fabricsData,  selectedFabric, handleChange, cols } = props;
  //console.log(width)
  let n_columns = (cols === 'xs' || cols === 'sm') ? 2 : 5;

  return ( 
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={n_columns}>
        
        {fabricsData.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.src} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>{tile.sku}</span>}
              actionIcon={
                <Radio
                  checked={selectedFabric === tile.name.trim()+'-'+tile.fabrics_number}
                  onChange={handleChange(tile.src)}
                  value={tile.name.trim()+'-'+tile.fabrics_number}
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
        ))}
      </GridList>
    </div>
  );
}

FabricGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FabricGridList);
