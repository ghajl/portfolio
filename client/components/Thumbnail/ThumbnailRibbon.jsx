import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  ribbon: {
    backgroundColor: '#4ca535',
    overflow: 'hidden',
    top: '2.2rem',
    right: '2.2rem',
    width: '200px',
    transform: 'translate(50%, -50%) rotate(45deg)',
    display: 'block',
    padding: '0.5rem',
    position: 'absolute',
    textAlign: 'center',
    userSelect: 'none',
    opacity: '.8',
    zIndex: -1,
    lineHeight: 1,
    font: 'bold 1.3rem sans-serif',
    color: '#fff',
    textDecoration: 'none',
    perspective: 100,
    fontSmoothing: 'antialiased'
  },
  ribbonLink: {
    top: '2.2rem',
    right: '2.2rem',
    width: '200px',
    height: '2.3rem',
    transform: 'translate(50%, -50%) rotate(45deg)',
    display: 'block',
    position: 'absolute',
    opacity: 0
  }
};

const ThumbnailRibbon = ({ classes, style, className, href, target, rel, children, ...props }) => (
  <React.Fragment>
    <div className={`${classes.ribbon} ${className}`} style={{ ...style }}>
      {children}
    </div>
    <a className={classes.ribbonLink} href={href} target={target} rel={rel} {...props}>
      Link to gitHub page
    </a>
  </React.Fragment>
);

export default withStyles(styles)(ThumbnailRibbon);

ThumbnailRibbon.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({})
};

ThumbnailRibbon.defaultProps = {
  className: '',
  target: '_blank',
  rel: 'noopener noreferrer',
  classes: {},
  style: {}
};
