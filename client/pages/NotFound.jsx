import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Page from './Page';
import Footer from '../components/Footer';

const styles = {
  content: {
    flex: '1 0 auto',
    width: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const NotFound = ({ classes }) => (
  <Page>
    <div className={classes.content}>
      <h1>Page Not Found</h1>
    </div>
    <Footer />
  </Page>
);

export default withStyles(styles)(NotFound);

NotFound.propTypes = {
  classes: PropTypes.shape({})
};

NotFound.defaultProps = {
  classes: {}
};
