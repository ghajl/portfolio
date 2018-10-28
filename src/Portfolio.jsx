import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PortfolioContent from './PortfolioContent';
import NotFound from './NotFound';

const Portfolio = () => (
  <Switch>

    <Redirect exact from="/portfolio" to="/portfolio/freecodecamp" />
    <Redirect exact from="/portfolio/freecodecamp" to="/portfolio/freecodecamp/full-stack" />
    <Route
      path="/portfolio/freecodecamp/:keyword(full-stack|front-end)"
      component={PortfolioContent}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Portfolio;
