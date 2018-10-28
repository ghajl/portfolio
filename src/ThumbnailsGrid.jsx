import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Thumbnail from './Thumbnail';
import ThumbnailImage from './ThumbnailImage';
import ThumbnailRibbon from './ThumbnailRibbon';
import ThumbnailOverlay from './ThumbnailOverlay';
import ThumbnailOverlayTitle from './ThumbnailOverlayTitle';
import ThumbnailOverlayTools from './ThumbnailOverlayTools';


const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    padding: 0,
    '@media (min-width: 481px)': {
      padding: '20px 0',
    },
    '@media (min-width: 768px)': {
      padding: '30px 0',
    },
  },
  item: {
    width: '100%',
    padding: '1.2rem',
    '@media (min-width: 768px)': {
      width: '50%',
    },
  },
  overlayTools: {
    '@media (min-width: 481px)': {
      fontSize: '.9rem',
    },
    '@media (min-width: 768px)': {
      fontSize: '.6rem',
    },
    // '@media (min-width: 1024px)': {
    // },
    '@media (min-width: 1280px)': {
      fontSize: '.8rem',
    },
    // '@media (min-width: 1440px)': {
    // },
    // '@media (min-width: 1600px)': {
    // },
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  overlayTitle: {
    '@media (min-width: 481px)': {
      fontSize: '2rem',
    },
    '@media (min-width: 768px)': {
      fontSize: '1.2rem',
    },
    '@media (min-width: 1024px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width: 1280px)': {
      fontSize: '2rem',
    },
  },
  button: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '1.5rem',
    boxShadow: '6px 6px 2px rgba(0, 0, 0, 1)',
    borderRadius: 0,
    backgroundColor: '#fff',
    color: 'red',
    fontWeight: 900,
    fontFamily: 'Kosugi, sans-serif',
    visibility: 'hidden',
    transition: '.1s',
    '.hover &': {
      visibility: 'visible',
    },
  },
};

class ThumbnailsGrid extends PureComponent {
  renderThumbnail = (project) => {
    const { classes } = this.props;
    return (
      <Thumbnail>
        <ThumbnailImage src={project.Image.S} />
        <ThumbnailOverlay>
          <ThumbnailOverlayTitle className={classes.overlayTitle}>
            {project.Title.S}
          </ThumbnailOverlayTitle>
          <ThumbnailOverlayTools className={classes.overlayTools}>
            {project.Tools.S.split(',').map(t => t.trim()).reduce((acc, val) => `${acc}, ${val}`)}
          </ThumbnailOverlayTools>
        </ThumbnailOverlay>
        <ThumbnailRibbon href={project.Github.S}>
          GitHub
        </ThumbnailRibbon>
        <Button size="small" variant="contained" href={project.Url.S} className={classes.button}>
          View Project
        </Button>
      </Thumbnail>
    );
  }

  renderThumbnailList = list => list.map((project) => {
    const { classes } = this.props;
    return (
      <div className={classes.item} key={project.Url.S}>
        {this.renderThumbnail(project)}
      </div>
    );
  });

  render() {
    const { className, classes, src } = this.props;

    return (
      <div className={`${classes.wrapper} ${className}`}>
        {this.renderThumbnailList(src)}
      </div>
    );
  }
}

export default withStyles(styles)(ThumbnailsGrid);

ThumbnailsGrid.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape({})),
  classes: PropTypes.shape({}),
  className: PropTypes.string,
};

ThumbnailsGrid.defaultProps = {
  classes: {},
  className: '',
  src: [],
};
