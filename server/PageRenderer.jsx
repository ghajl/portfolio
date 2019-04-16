import React from 'react';
import { renderToString } from 'react-dom/server';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { StaticRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset
} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import serialize from 'serialize-javascript';
import { renderRoutes } from 'react-router-config';
import { create } from 'jss';
import Root from '../client/Root';
import routes from '../util/routes';
import fetchData from '../util/fetchData';
import { connectDb } from './db';
import { isDebug } from '../config/app';

let config = null;
if (isDebug) {
  config = require('./config').default;
}

export default async location => {
  const context = {};
  const sheets = new SheetsRegistry();
  const sheetsManager = new Map();
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#1e90ff' },
      accent: red,
      type: 'light'
    }
  });
  const generateClassName = createGenerateClassName();
  const jss = create(jssPreset());
  const db = connectDb(config);
  const data = await fetchData(location, db);
  const reactDom = renderToString(
    <JssProvider jss={jss} registry={sheets} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <Router location={location} context={context}>
          {renderRoutes(routes, { data })}
        </Router>
      </MuiThemeProvider>
    </JssProvider>
  );
  const headAssets = Helmet.renderStatic();
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    <style type="text/css" id="server-side-styles">
      ${sheets.toString()}
    </style>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127068774-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-127068774-1');
    </script>

    
      
  </head>
  <body>
    <div id="root">${reactDom}</div>
    <script type="text/javascript" charset="utf-8" >window.__INITIAL_DATA__ = ${serialize(
      data
    )}</script>
    <script type="text/javascript" charset="utf-8" src="/dist/bundle.js"></script>
  </body>
</html>
`;

  return { html, context };
};
