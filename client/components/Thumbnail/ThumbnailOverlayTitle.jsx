import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'relative',
    color: 'lightgray',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.2rem',
    textShadow: '0 0 2px #fff',
    maxWidth: '75%',
    lineHeight: 1,
  },
};


const ThumbnailOverlayTitle = ({
  classes, style, className, children
}) => (
  <div className={`${classes.root} ${className}`} style={{ ...style }}>
    {children}
  </div>
);

export default withStyles(styles)(ThumbnailOverlayTitle);

ThumbnailOverlayTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

ThumbnailOverlayTitle.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
