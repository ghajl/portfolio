import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Root from './Root';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1e90ff' },
    accent: red,
    type: 'light',
  },
});
const rootElement = document.getElementById('root');
ReactDOM.hydrate(
  (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Root />
      </MuiThemeProvider>
    </Router>
  ),
  rootElement,
  () => {
    const ssStyles = document.getElementById('server-side-styles');
    ssStyles.parentNode.removeChild(ssStyles);
  },
);
