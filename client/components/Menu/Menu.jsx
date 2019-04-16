import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilterButton from '../FilterButton';
import styles from './MenuStyles';

const Menu = ({ menuRef, classes, style }) => (
  <Fragment>
    <div ref={menuRef} style={{ ...style }} className={classes.menuWrapper}>
      <div className={`${classes.menu} page-center`}>
        <div className={classes.actions}>
          <FilterButton value="show-all">Show All</FilterButton>
          <FilterButton value="full-stack">Full Stack</FilterButton>
          <FilterButton value="front-end">Front-End</FilterButton>
          <FilterButton value="nodejs">NodeJS</FilterButton>
          <FilterButton value="redux">Redux</FilterButton>
          <FilterButton value="gatsby">Gatsby</FilterButton>
          <FilterButton value="graphql">GraphQL</FilterButton>
          <FilterButton value="mongodb">MongoDb</FilterButton>
          <FilterButton value="react">React</FilterButton>
          <FilterButton value="netlify-cms">Netlify CMS</FilterButton>
        </div>
      </div>
    </div>
  </Fragment>
);

export default withStyles(styles)(Menu);

Menu.propTypes = {
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
  menuRef: PropTypes.shape({}).isRequired
};

Menu.defaultProps = {
  classes: {},
  style: {}
};
