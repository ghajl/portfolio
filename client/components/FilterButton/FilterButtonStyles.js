export default {
  thumbnail: {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 3px #222, inset 0 0 50px rgba(0,0,0,.5)'
  },
  button: {
    color: '#bbb',
    display: 'inline-block',
    padding: '0 .3rem',
    position: 'relative',
    fontSize: '.8rem',
    boxShadow: '2px 2px 2px #222, inset 0 1rem 0 rgba(255,255,255, .2), 0 0 1px black',
    background: '#454749',
    lineHeight: '2rem',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    borderRadius: '3px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    margin: '5px',
    transitionDuration: '0.3s',
    '&:active': {
      transform: 'scale(0.98)'
    },
    '&:hover': {
      color: 'greenyellow',
      background: '#565859'
    }
  },
  active: {
    color: 'greenyellow',
    background: '#565859'
  }
};

