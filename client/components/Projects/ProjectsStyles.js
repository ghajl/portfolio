export default {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    padding: 0,
    margin: '0 auto',
    '@media (min-width: 481px)': {
      padding: '20px 0'
    },
    '@media (min-width: 768px)': {
      padding: '30px 0'
    }
  },
  item: {
    width: '100%',
    padding: '1.2rem',
    '@media (min-width: 768px)': {
      width: '50%'
    }
  },
  overlayTools: {
    '@media (min-width: 481px)': {
      fontSize: '.9rem'
    },
    '@media (min-width: 768px)': {
      fontSize: '.6rem'
    },
    '@media (min-width: 1280px)': {
      fontSize: '.8rem'
    },
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  overlayTitle: {
    '@media (min-width: 481px)': {
      fontSize: '2rem'
    },
    '@media (min-width: 768px)': {
      fontSize: '1.2rem'
    },
    '@media (min-width: 1024px)': {
      fontSize: '1.5rem'
    },
    '@media (min-width: 1280px)': {
      fontSize: '2rem'
    }
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
      visibility: 'visible'
    }
  }
};
