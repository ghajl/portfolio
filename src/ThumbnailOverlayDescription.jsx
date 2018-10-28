import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'relative',
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '.8rem',
    maxWidth: '90%',
    lineHeight: 1,
    paddingTop: '.3rem',
  },
};


const ThumbnailOverlayDescription = ({
  classes, style, className, children, ...props
}) => (
  <div className={`${classes.root} ${className}`} style={{ ...style }}>
    {children}
  </div>
);

export default withStyles(styles)(ThumbnailOverlayDescription);

ThumbnailOverlayDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

ThumbnailOverlayDescription.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
