import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PortfolioContent from './PortfolioContent';
import NotFound from './NotFound';

const Portfolio = () => (
  <Switch>
    <Redirect exact from="/portfolio" to="/portfolio/freecodecamp" />
    <Redirect
      exact
      from="/portfolio/freecodecamp"
      to="/portfolio/freecodecamp/show-all"
    />
    <Route
      path="/portfolio/freecodecamp/:keyword(show-all|full-stack|front-end|mongodb|nodejs|react|redux|graphql|gatsby|netlify-cms)"
      component={PortfolioContent}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Portfolio;
