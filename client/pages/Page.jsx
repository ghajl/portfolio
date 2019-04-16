import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';

const styles = {
  '@global': {
    html: {
      minHeight: '100%',
      height: '100%',
      fontSize: 16
    },
    body: {
      height: '100%',
      minHeight: '100%',
      margin: 0,
      background: '#55585E',
      padding: 0,
      '& > div:first-child': {
        height: '100%'
      }
    },
    '*, *:before, *:after': {
      boxSizing: 'border-box'
    },
    a: {
      textDecoration: 'none !important',
      outline: 'none'
    },
    '.page-center': {
      margin: '0 auto',
      maxWidth: 500,
      minWidth: 290,
      '@media (min-width: 768px)': {
        maxWidth: 700
      },
      '@media (min-width: 1024px)': {
        maxWidth: 900
      },
      '@media (min-width: 1280px)': {
        maxWidth: 1100
      },
      '@media (min-width: 1440px)': {
        maxWidth: 1300
      },
      '@media (min-width: 1600px)': {
        maxWidth: 1500
      }
    }
  },
  root: {
    position: 'relative',
    display: 'flex',
    'flex-direction': 'column',
    height: '100%'
  }
};

const meta = [
  {
    charset: 'utf-8'
  },
  {
    'http-equiv': 'X-UA-Compatible',
    content: 'IE=edge'
  },
  {
    name: 'viewport',
    content: 'initial-scale=1, minimum-scale=1, width=device-width, height=device-height'
  }
];

const links = [
  {
    rel: 'shortcut icon',
    type: 'image/x-icon',
    href: '/public/favicon.ico'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto|Kosugi|Open+Sans'
  }
];

const title = 'Michael Umansky | Portfolio';

const Page = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <Helmet title={title} link={links} meta={meta} />
      {children}
    </div>
  );
};

export default withStyles(styles)(Page);

Page.propTypes = {
  classes: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))])
    .isRequired
};

Page.defaultProps = {
  classes: {}
};
