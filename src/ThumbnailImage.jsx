import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  wrapper: {
    position: 'relative',
    background: '#333',
    minHeight: 'calc((100vw - 2.4rem) / 1.57)',
    '@media (min-width: 500px)': {
      minHeight: 'calc((500px - 2.4rem) / 1.57)',
    },
    '@media (min-width: 768px)': {
      minHeight: 'calc((350px - 2.4rem) / 1.57)',
    },
    '@media (min-width: 1024px)': {
      minHeight: 'calc((450px - 2.4rem) / 1.57)',
    },
    '@media (min-width: 1280px)': {
      minHeight: 'calc((550px - 2.4rem) / 1.57)',
    },
    '@media (min-width: 1440px)': {
      minHeight: 'calc((650px - 2.4rem) / 1.57)',
    },
    '@media (min-width: 1600px)': {
      minHeight: 'calc((750px - 2.4rem) / 1.57)',
    },
    zIndex: -3,
  },
  image: {
    position: 'relative',
    objectFit: 'cover',
    display: 'none',
    maxWidth: '100%',
    // zIndex: -2,
  },
  progressWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loading: {
    position: 'relative',
  },
};

class ThumbnailImage extends PureComponent {
  image = React.createRef();

  state = {
    loading: true,
    error: false,
    src: '',
  }

  componentDidMount() {
    const { src } = this.props;
    const img = this.image.current;
    if (img.complete) {
      this.setState({ src, loading: false, error: false });
    } else {
      this.setState({ src, loading: true, error: false });
    }
  }

  onLoad = () => {
    this.setState({ loading: false, error: false });
  }

  onError = () => {
    this.setState({ loading: false, error: true });
  }

  render() {
    const {
      classes, style, className, alt, ...props
    } = this.props;
    const { error, loading, src } = this.state;
    const imgStyle = src && !error
      ? {
        display: 'block',
      }
      : {};
    const wrapperStyle = src && !error
      ? {
        minHeight: 0,
      }
      : {};
    return (
      <div className={classes.wrapper} style={wrapperStyle}>
        <img
          className={`${classes.image} ${className}`}
          style={{ ...imgStyle, ...style }}
          ref={this.image}
          alt={alt}
          src={src}
          onError={this.onError}
          onLoad={this.onLoad}
          {...props}
        />
        {loading
          && (
            <div className={classes.progressWrapper}>
              <CircularProgress size={30} className={classes.loading} />
            </div>
          )
        }
      </div>
    );
  }
}

export default withStyles(styles)(ThumbnailImage);

ThumbnailImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

ThumbnailImage.defaultProps = {
  className: '',
  classes: {},
  style: {},
  alt: 'Project\'s screenshot',
};
