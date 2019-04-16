import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Thumbnail, {
  ThumbnailImage,
  ThumbnailRibbon,
  ThumbnailOverlay,
  ThumbnailOverlayTitle,
  ThumbnailOverlayTools
} from '../Thumbnail';
import styles from './ProjectsStyles';

const renderThumbnail = (project, classes) => (
  <Thumbnail>
    <ThumbnailImage src={project.Image.S} />
    <ThumbnailOverlay>
      <ThumbnailOverlayTitle className={classes.overlayTitle}>
        {project.Title.S}
      </ThumbnailOverlayTitle>
      <ThumbnailOverlayTools className={classes.overlayTools}>
        {project.Tools.S.split(',')
          .map(t => t.trim())
          .reduce((acc, val) => `${acc}, ${val}`)}
      </ThumbnailOverlayTools>
    </ThumbnailOverlay>
    <ThumbnailRibbon href={project.Github.S}>GitHub</ThumbnailRibbon>
    <Button size="small" variant="contained" href={project.Url.S} className={classes.button}>
      View Project
    </Button>
  </Thumbnail>
);

const renderProject = classes => item => (
  <div className={classes.item} key={item.Url.S}>
    {renderThumbnail(item, classes)}
  </div>
);

const Projects = ({ className, classes, projects }) => (
  <div className={`${classes.wrapper} ${className}`}>{projects.map(renderProject(classes))}</div>
);

export default withStyles(styles)(Projects);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})),
  classes: PropTypes.shape({}),
  className: PropTypes.string
};

Projects.defaultProps = {
  classes: {},
  className: '',
  projects: []
};
