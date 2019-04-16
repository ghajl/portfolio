import React from 'react';
import { Redirect } from 'react-router-dom';
import PortfolioContainer from '../client/pages/PortfolioContainer';
import NotFound from '../client/pages/NotFound';
import Root from '../client/Root';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Redirect to="/portfolio" />
      },
      {
        path: '/portfolio',
        exact: true,
        component: () => <Redirect to="/portfolio/freecodecamp/show-all" />
      },
      {
        path:
          '/portfolio/freecodecamp/:keyword(show-all|full-stack|front-end|mongodb|nodejs|react|redux|graphql|gatsby|netlify-cms)',
        component: PortfolioContainer
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
