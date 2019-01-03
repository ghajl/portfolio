import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';

const styles = {
  '@global': {
    html: {
      minHeight: '100%',
      height: '100%',
      fontSize: 16,
    },
    body: {
      height: '100%',
      minHeight: '100%',
      margin: 0,
      background: 'white',
      padding: 0,
      '& > div:first-child': {
        height: '100%',
      },
    },
    '*, *:before, *:after': {
      boxSizing: 'border-box',
    },
    a: {
      textDecoration: 'none !important',
      outline: 'none',
    },
  },
  root: {
    position: 'relative',
    display: 'flex',
    'flex-direction': 'column',
    height: '100%',
  },
};

class Page extends PureComponent {
  meta = [
    {
      charset: 'utf-8',
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content:
        'initial-scale=1, minimum-scale=1, width=device-width, height=device-height',
    },
  ];

  links = [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/public/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto|Kosugi|Open+Sans',
    },
  ];

  title = 'Michael Umansky | Portfolio';

  render() {
    const { classes, style, className, children, ...props } = this.props;
    return (
      <div
        className={`${classes.root} ${className}`}
        style={{ ...style }}
        {...props}
      >
        <Helmet title={this.title} link={this.links} meta={this.meta} />
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Page);

Page.propTypes = {
  classes: PropTypes.shape({}),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
};

Page.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
