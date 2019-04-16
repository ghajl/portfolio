import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';
import { renderRoutes } from 'react-router-config';
import red from '@material-ui/core/colors/red';
import routes from '../util/routes';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1e90ff' },
    accent: red,
    type: 'light'
  }
});
const generateClassName = createGenerateClassName();
const rootElement = document.getElementById('root');
ReactDOM.hydrate(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Router>{renderRoutes(routes)}</Router>
    </MuiThemeProvider>
  </JssProvider>,
  rootElement,
  () => {
    const ssStyles = document.getElementById('server-side-styles');
    ssStyles.parentNode.removeChild(ssStyles);
  }
);
