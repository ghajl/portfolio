import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import throttle from 'lodash.throttle';
import Header from '../components/Header/HeaderContainer';
import Page from './Page';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

const styles = {
  content: {
    flex: '1 0 auto',
    display: 'flex',
    'flex-direction': 'column'
  }
};

class PortfolioContainer extends PureComponent {
  headerRef = React.createRef();

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.keyword !== match.params.keyword) {
      window.scroll(0, this.getHeaderHeight());
    }
  }

  getHeaderHeight = () => {
    if (this.headerRef) {
      const { height } = this.headerRef.current.getBoundingClientRect();
      return height;
    }
    return 70;
  };

  render() {
    const { classes, children } = this.props;
    return (
      <Page>
        <Header headerRef={this.headerRef} />
        <main className={classes.content}>
          <Portfolio />
        </main>
        <Footer />
      </Page>
    );
  }
}

export default withRouter(withStyles(styles)(PortfolioContainer));

PortfolioContainer.propTypes = {
  classes: PropTypes.shape({})
};

PortfolioContainer.defaultProps = {
  classes: {}
};
