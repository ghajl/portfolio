import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    transition: '.5s ease',

    opacity: 0,
    position: 'absolute',
    background: 'rgba(0,0,0,0)',
    color: 'white',
    top: 0,
    left: 0,
    padding: '1.5rem',
    width: '100%',
    height: '100%',
    zIndex: -2,
    '.hover &': {
      background: 'rgba(0,0,0,0.6)',
      opacity: 1,
    },
  },
};


const ThumbnailOverlay = ({
  classes, style, className, children
}) => (
  <div className={`${classes.container} ${className}`} style={{ ...style }}>
    {children}
  </div>
);

export default withStyles(styles)(ThumbnailOverlay);

ThumbnailOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

ThumbnailOverlay.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
