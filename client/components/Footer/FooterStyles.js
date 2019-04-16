export default {
  root: {
    background: '#55585E'
  },
  iconsContainer: {
    position: 'relative',
    display: 'inline-block',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  iconContainer: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '3px 20px',
    '& *': {
      boxSizing: 'content-box'
    }
  },
  a: {
    margin: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    transition: '.4s',
    borderRadius: '50%',
    border: '1.2px solid',
    borderColor: 'darkgray',
    padding: 5,
    margin: 5,
    fill: 'darkgray',
    '.can-hover &:hover': {
      fill: 'greenyellow',
      borderColor: 'greenyellow'
    }
  }
};

