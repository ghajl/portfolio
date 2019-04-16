import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import styles from './FilterButtonStyles';

const FilterButton = ({
  classes,
  style,
  className,
  activeClassNamee,
  children,
  value,
  ...props
}) => {
  const to = { pathname: `/portfolio/freecodecamp/${value}` };
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
};

export default withStyles(styles)(FilterButton);

FilterButton.propTypes = {
  className: PropTypes.string,
  activeClassNamee: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({})
};

FilterButton.defaultProps = {
  className: '',
  classes: {},
  style: {},
  activeClassNamee: '',
  value: ''
};
