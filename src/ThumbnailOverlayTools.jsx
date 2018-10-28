import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'relative',
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: '.6rem',
    maxWidth: '75%',
    lineHeight: 1,
    overflow: 'ellipse',
  },
};


const ThumbnailOverlayTools = ({
  classes, style, className, children
}) => (
  <div className={`${classes.root} ${className}`} style={{ ...style }}>
    {children}
  </div>
);

export default withStyles(styles)(ThumbnailOverlayTools);

ThumbnailOverlayTools.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

ThumbnailOverlayTools.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
