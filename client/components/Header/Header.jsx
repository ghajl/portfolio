import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './HeaderStyles';

const Header = ({ classes, headerRef }) => (
  <header className={`${classes.header} page-center`} ref={headerRef}>
    <div className={classes.title}>
      <h1>web software development projects</h1>
    </div>
    <div className={classes.intro}>
      <h3>
        Responsive HTML/CSS and modern web development technologies - React, Redux, Gatsby, etc.
      </h3>
    </div>
  </header>
);

export default withStyles(styles)(Header);

Header.propTypes = {
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
  headerRef: PropTypes.shape({}).isRequired
};

Header.defaultProps = {
  classes: {},
  style: {}
};
