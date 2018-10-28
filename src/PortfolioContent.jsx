import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ThumbnailsGrid from './ThumbnailsGrid';
import PortfolioPage from './PortfolioPage';
import withData from './withData';

const styles = {
  wrapper: {
    flex: '1 1 auto',
  },
};

class PortfolioContent extends PureComponent {
  render() {
    const { classes, data, ...props } = this.props;
    return (
      <PortfolioPage {...props}>
        <div className={classes.wrapper}>
          <ThumbnailsGrid className="page-wrapper" src={data.projects} />
        </div>
      </PortfolioPage>
    );
  }
}

export default withData(withStyles(styles)(PortfolioContent));

PortfolioContent.propTypes = {
  classes: PropTypes.shape({}),
  match: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}),
};

PortfolioContent.defaultProps = {
  data: {
    projects: [],
  },
  classes: {},
};
