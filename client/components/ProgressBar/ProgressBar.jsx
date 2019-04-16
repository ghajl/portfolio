import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import withLoading from '../../helpers/withLoading';
import styles from './ProgressBarStyles';

class ProgressBar extends PureComponent {
  state = {
    playing: false,
    completed: 0,
    buffer: 0
  };

  componentDidUpdate(prevProps, prevState) {
    const { isLoading } = this.props;
    const { playing } = this.state;
    if (prevProps.isLoading !== isLoading) {
      if (isLoading && !playing) {
        this.setState({ playing: true, completed: 0, buffer: 10 }, () => {
          this.timer = setInterval(this.progress, 50);
        });
      } else if (!isLoading && prevState.playing) {
        this.setState({ playing: false, completed: 0, buffer: 0 }, () => clearInterval(this.timer));
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 100) {
      this.setState({ completed: 0, buffer: 0 });
    } else {
      const diff = Math.random() * 10;
      const diff2 = Math.random() * 10;
      this.setState({
        completed: completed + diff,
        buffer: completed + diff + diff2
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { playing, completed, buffer } = this.state;
    const dashedClasses = playing ? classes.progressAnimation : classes.progressStoppedAnimation;
    const colorPrimaryClasses = playing ? classes.colorPrimary : '';
    const dashedColorPrimaryClasses = playing
      ? classes.progressDashedColor
      : classes.progressStoppedDashedColor;

    return (
      <LinearProgress
        className={classes.progress}
        classes={{
          root: classes.progressRoot,
          dashed: dashedClasses,
          dashedColorPrimary: dashedColorPrimaryClasses,
          colorPrimary: colorPrimaryClasses,
          barColorPrimary: classes.barColorPrimary
        }}
        variant="buffer"
        value={completed}
        valueBuffer={buffer}
      />
    );
  }
}

export default withLoading(withStyles(styles)(ProgressBar));

ProgressBar.propTypes = {
  classes: PropTypes.shape({}),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  isLoading: PropTypes.bool.isRequired
};

ProgressBar.defaultProps = {
  className: '',
  classes: {},
  style: {}
};
