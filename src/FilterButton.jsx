import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const styles = {
  thumbnail: {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 3px #222, inset 0 0 50px rgba(0,0,0,.5)',
    // zIndex: 100,
  },
  button: {
    color: '#bbb',
    /* border: 2px solid#444; */
    display: 'inline-block',
    padding: '0 .3rem',
    position: 'relative',
    fontSize: '.8rem',
    boxShadow:
      '2px 2px 2px #222, inset 0 1rem 0 rgba(255,255,255, .2), 0 0 1px black',
    background: '#454749',
    lineHeight: '2rem',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    /* text-shadow: 0 1px 3px #DfDfDf; */
    borderRadius: '3px',
    textTransform: 'uppercase',
    /* letter-spacing: -1px; */
    textDecoration: 'none',
    margin: '5px',
    transitionDuration: '0.3s',
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:hover': {
      color: 'greenyellow',
      background: '#565859',
    },
  },
  active: {
    color: 'greenyellow',
    background: '#565859',
  },
};

class FilterButton extends PureComponent {
  render() {
    const {
      classes,
      style,
      className,
      activeClassNamee,
      children,
      to,
      ...props
    } = this.props;
    return (
      <NavLink
        className={`${className} ${classes.button}`}
        activeClassName={classes.active}
        style={{ ...style }}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    );
  }
}

export default withStyles(styles)(FilterButton);

FilterButton.propTypes = {
  className: PropTypes.string,
  activeClassNamee: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

FilterButton.defaultProps = {
  className: '',
  classes: {},
  style: {},
  activeClassNamee: '',
  to: '',
};
