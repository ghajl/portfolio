import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  link: {
    display: 'block',
    position: 'relative',
    textDecoration: 'none',
    height: '100%',
  },
};

const ThumbnailLink = ({
  classes, style, className, children, ...props
}) => (
  <a
    className={`${classes.link} ${className}`}
    style={{ ...style }}
    {...props}
  >
    {children}
  </a>
);

export default withStyles(styles)(ThumbnailLink);

ThumbnailLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

ThumbnailLink.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
