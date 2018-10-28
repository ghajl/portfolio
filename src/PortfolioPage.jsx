import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import throttle from 'lodash.throttle';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';

// background: '#55585E',
const styles = {
  '@global': {
    body: {
      background: '#55585E',
    },
    '.page-wrapper': {
      margin: '0 auto',
      maxWidth: 500,
      minWidth: 290,
      '@media (min-width: 768px)': {
        maxWidth: 700,
      },
      '@media (min-width: 1024px)': {
        maxWidth: 900,
      },
      '@media (min-width: 1280px)': {
        maxWidth: 1100,
      },
      '@media (min-width: 1440px)': {
        maxWidth: 1300,
      },
      '@media (min-width: 1600px)': {
        maxWidth: 1500,
      },
    },
  },
  content: {
    flex: '1 0 auto',
    width: '100%',
    display: 'flex',
    'flex-direction': 'column',
  },
};

class PortfolioPage extends PureComponent {
  headerRef = React.createRef();

  state = {
    headerFixed: false,
  }

  componentDidMount() {
    window.addEventListener('resize', throttle(
      this.handleWindowSizeChange,
      250,
    ));
    window.addEventListener('scroll', throttle(
      this.handleScroll,
      100,
    ));
    this.setState({
      header: {
        height: this.getHeaderHeight(),
      },
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { header, headerFixed } = this.state;
    if (prevState.headerFixed && headerFixed) {
      window.scroll(0, header.height);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('scroll', this.handleScroll);
  }

  getHeaderHeight = () => {
    if (this.headerRef) {
      const { height } = this.headerRef.current.getBoundingClientRect();
      return height;
    }
    return 70;
  }

  handleWindowSizeChange = () => {
    this.setState({
      header: {
        height: this.getHeaderHeight(),
      },
    });
  }

  handleScroll = () => {
    const { headerFixed, header } = this.state;
    if (this.headerRef) {
      const { top } = this.headerRef.current.getBoundingClientRect();
      if (headerFixed) {
        if (top > (-1) * header.height) {
          this.setState({ headerFixed: false });
        }
      } else if (top <= (-1) * header.height) {
        this.setState({ headerFixed: true });
      }
    }
  }


  render() {
    const {
      classes, children, className, style, ...props
    } = this.props;
    const { headerFixed } = this.state;
    return (
      <Page
        className={`${className}`}
        style={style}
        {...props}
      >
        <Header
          headerRef={this.headerRef}
          fixed={headerFixed}
        />
        <div className={classes.content}>
          {children}
        </div>
        <Footer />
      </Page>
    );
  }
}

export default withStyles(styles)(PortfolioPage);

PortfolioPage.propTypes = {
  classes: PropTypes.shape({}),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.shape({}).isRequired,
};

PortfolioPage.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
