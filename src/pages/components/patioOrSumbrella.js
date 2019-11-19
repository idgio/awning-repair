import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'https://kohlerawning.com/wp-content/gallery/sunbrella/Sunbrella-4789-Manhattan-Classic-rendering.jpg',
    title: 'Sunbrella',
    width: '48%',
    data: 1,
  },
  {
    url: 'https://marketcorner.trivantage.com/wp-content/uploads/2017/08/Screen-Shot-2017-06-28-at-3.02.02-PM.png',
    title: 'Patio 500',
    width: '48%',
    data: 2,
  },
];

function PatioOrSumbrella(props) {
  const { classes, handleFilterType, cols } = props;
  if(cols === 'xs' )
  {
    return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          onClick={handleFilterType.bind(this,image.data)}
          
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            marginLeft: '1%',
            marginRight: '1%',
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
     </div>
  );
  }
  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          onClick={handleFilterType.bind(this,image.data)}
          
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            marginLeft: '1%',
            marginRight: '1%',
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
      
      <div style={{width: 48+ '%', paddingLeft: 1+'%', paddingRight: 1+'%', textAlign: 'justify' }}>
        <p>Sunbrella awning fabric makes it easy to create beautiful shade structures that outperform the elements. This awning fabric offers excellent fade, weather, and water resistance. Choose from a wide selection of colors and patterns to fit any space. It is perfect for coordinating with Sunbrella upholstery fabrics.
          Among our options is the exclusive Sunbrella Mayfield Collection®, designed for upscale outdoor living. It combines a premium aesthetic with the legendary performance that Sunbrella offers. Find classic outdoor fabric designs, featuring refined colors and wider repeats. These fabrics add style and elegance to any awning or canopy.</p>
        <a target="blank" href="https://cdn.glenraven.net/sb2016/pdf/warranty/sunbrella-fabric-warranty-en-us.pdf" > See the Sunbrella warranty</a>
      </div>
      <div style={{width: 48+ '%', paddingLeft: 1+'%', paddingRight: 1+'%', textAlign: 'justify' }}>
       <p>Patio 500 fabric is a great choice for both commercial and residential applications such as awnings and canopies. A staple for over 45 years, the awning fabric brings proven performance. It resists mildew and UV degradation while keeping spaces 8–15 degrees cooler. The outdoor fabric combines a lasting matte finish with exceptional dimensional stability and strength. Patio 500 is heat sealable and great for decorating signage with graphics. Backed by a 5-year warranty, you can buy with peace of mind.</p>
       <a target="blank" href="https://www.trivantage.com/itemfiles/pdfs/warranty/Patio500_Warranty.pdf" > See the Patio 500 warranty</a>
      </div>
    </div>
  );
}

PatioOrSumbrella.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatioOrSumbrella);