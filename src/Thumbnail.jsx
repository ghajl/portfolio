import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  thumbnail: {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 3px #222, inset 0 0 50px rgba(0,0,0,.5)',
    // zIndex: 100,
  },
};

class Thumbnail extends PureComponent {
  state = {
    hover: false,
  }

  handlePopoverOpen = () => {
    this.setState({ hover: true });
  }

  handlePopoverClose = () => {
    this.setState({ hover: false });
  }

  render() {
    const {
      classes, style, className, children, ...props
    } = this.props;
    const { hover } = this.state;
    const thumbnailClasses = `${classes.thumbnail} ${className}${hover ? ' hover' : ''}`;
    return (
      <div
        className={thumbnailClasses}
        style={{ ...style }}
        onMouseEnter={this.handlePopoverOpen}
        onMouseLeave={this.handlePopoverClose}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Thumbnail);

Thumbnail.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

Thumbnail.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
