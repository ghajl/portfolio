import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Projects from '../Projects';
import withData from '../../helpers/withData';
import styles from './PortfolioStyles';

const Portfolio = ({ classes, data: { projects } }) => (
  <div className={classes.wrapper}>
    <Projects className="page-center" projects={projects} />
  </div>
);

export default withData(withStyles(styles)(Portfolio));

Portfolio.propTypes = {
  classes: PropTypes.shape({}),
  data: PropTypes.shape({})
};

Portfolio.defaultProps = {
  data: {
    projects: []
  },
  classes: {}
};
