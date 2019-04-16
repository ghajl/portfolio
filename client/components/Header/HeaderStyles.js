export default {
  wrapper: {
    position: 'relative',
    padding: 0,
    transition: 'background .6s',
    background: '#55585E'
  },
  header: {
    position: 'relative',
    padding: '0 1.2rem',
    overflow: 'hidden'
  },
  title: {
    fontFamily: 'sans-serif',
    color: 'white',
    fontSize: '1.3rem',
    textShadow: '0 0 1px #fff',
    '@media (min-width: 360px)': {
      fontSize: '1.6rem'
    }
  },
  intro: {
    fontFamily: 'Open Sans, sans-serif',
    color: 'lightgray'
  },
  actions: {
    margin: '5px 0 5px -5px'
  },
  menuWrapper: {
    zIndex: 1000
  },
  menuAnchor: {
    background: '#323438'
  },
  menu: {
    padding: '0 1.2rem',
    position: 'relative',
    width: '100%',
    transition: 'none',
    color: 'white',
    zIndex: 1000
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
      transitionProperty: 'right'
    },
    '&:hover:before': {
      right: 0
    }
  },
  linkActive: {
    '&:before': {
      content: '""',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      height: 2,
      background: 'dodgerblue'
    }
  },
  progress: {
    transition: 'background .6s',
    backgroundColor: '#55585E'
  },
  progressRoot: {
    height: 2
  },
  colorPrimary: {
    backgroundColor: 'greenyellow'
  },
  barColorPrimary: {
    backgroundColor: 'greenyellow'
  },
  progressStoppedAnimation: {
    animationIterationCount: 0
  },
  progressDashedColor: {
    backgroundSize: '1px 1px'
  },
  progressStoppedDashedColor: {
    backgroundImage: 'none'
  }
};

