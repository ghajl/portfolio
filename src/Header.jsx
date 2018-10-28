import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import withLoading from './withLoading';

const styles = {
  wrapper: {
    position: 'relative',
    padding: 0,
    transition: 'background .6s',
    background: '#55585E',
  },
  header: {
    position: 'relative',
    padding: '0 1.2rem',
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'sans-serif',
    color: 'white',
    fontSize: '1.6rem',
    textShadow: '0 0 1px #fff',
  },
  intro: {
    fontFamily: 'Open Sans, sans-serif',
    color: 'lightgray',
  },
  actions: {
    marginLeft: '-0.8rem',
  },
  menuWrapper: {
    zIndex: 1000,
  },
  menuAnchor: {
    background: '#323438',
  },
  menu: {
    padding: '0 1.2rem',
    position: 'relative',
    width: '100%',
    transition: 'none',
    color: 'white',
    zIndex: 1000,
  },
  link: {
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center',
    lineHeight: 2,
    margin: '.8rem',
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
    fontSize: '.9rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    textShadow: '0 0 1px #000',
    cursor: 'pointer',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: '100%',
      bottom: 0,
      height: 2,
      background: 'dodgerblue',
      transitionDuration: '0.3s',
      transitionProperty: 'right',
    },
    '&:hover:before': {
      right: 0,
    },
  },
  linkActive: {
    '&:before': {
      content: '""',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      height: 2,
      background: 'dodgerblue',
    },
  },
  progress: {
    transition: 'background .6s',
    backgroundColor: '#55585E',
  },
  progressRoot: {
    height: 2,
  },
  progressStoppedAnimation: {
    animationIterationCount: 0,
  },
  progressDashedColor: {
    backgroundSize: '1px 1px',
  },
  progressStoppedDashedColor: {
    backgroundImage: 'none',
  },
};

class Header extends PureComponent {
  timer = null;

  menuRef = React.createRef();

  state = {
    playing: false,
    completed: 0,
    buffer: 0,
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
      this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
    }
  };

  render() {
    const {
      classes, style, className, headerRef, fixed,
    } = this.props;
    const { playing, completed, buffer } = this.state;
    const headerStyle = fixed
      ? {
        background: '#323438',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      }
      : {};
    const fixedMenuStyle = fixed
      ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#323438',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      }
      : {};
    const fixedMenuAnchorStyle = fixed && this.menuRef
      ? {
        height: this.menuRef.current.getBoundingClientRect().height,
      }
      : {
        height: '0px',
      };
    let progressStyle = fixed
      ? {
        background: '#323438',
      }
      : {};
    progressStyle = playing
      ? {
        ...progressStyle, ...{ animationIterationCount: 'infinite' },
      }
      : {
        ...progressStyle, ...{ animationIterationCount: 0 },
      };
    const linearProgressClasses = playing
      ? {
        dashedColorPrimary: classes.progressDashedColor,
        root: classes.progressRoot,
      }
      : {
        dashed: classes.progressStoppedAnimation,
        dashedColorPrimary: `${classes.progressDashedColor} ${classes.progressStoppedDashedColor}`,
        root: classes.progressRoot,
      };
    return (
      <div
        className={`${classes.wrapper} ${className}`}
        style={{ ...style, ...headerStyle }}
      >
        <header
          className={`${classes.header} page-wrapper`}
          ref={headerRef}
        >
          <div className={classes.title}>
            <h1>
              web software development projects
            </h1>
          </div>
          <div className={classes.intro}>
            <h3>
              Responsive HTML/CSS and modern web development
              technologies - React, Redux, Gatsby, etc.
            </h3>
          </div>
        </header>
        <div className={classes.menuAnchor} style={fixedMenuAnchorStyle} />
        <div
          ref={this.menuRef}
          style={fixedMenuStyle}
          className={classes.menuWrapper}
        >
          <div
            className={`${classes.menu} page-wrapper`}
          >
            <div className={classes.actions}>
              <NavLink
                className={classes.link}
                activeClassName={classes.linkActive}
                to={{ pathname: '/portfolio/freecodecamp/full-stack' }}
              >
                Full Stack
              </NavLink>
              <NavLink
                className={classes.link}
                activeClassName={classes.linkActive}
                to={{ pathname: '/portfolio/freecodecamp/front-end' }}
              >
                Front-End
              </NavLink>
            </div>
          </div>
        </div>
        <LinearProgress
          className={classes.progress}
          classes={linearProgressClasses}
          style={progressStyle}
          variant="buffer"
          value={completed}
          valueBuffer={buffer}
        />
      </div>
    );
  }
}

export default withLoading(withStyles(styles)(Header));

Header.propTypes = {
  classes: PropTypes.shape({}),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  headerRef: PropTypes.shape({}).isRequired,
  fixed: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  className: '',
  classes: {},
  style: {},
};
