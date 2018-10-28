/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import Portfolio from './Portfolio';
import NotFound from './NotFound';
import DataContext from './DataContext';
import LoadingContext from './LoadingContext';
import fetchRoute from '../util/fetchRoute';


class Root extends Component {
  constructor(props) {
    super(props);
    let data;
    if (__isBrowser__) {
      data = window.__INITIAL_DATA__ || null;
      delete window.__INITIAL_DATA__;
    } else {
      data = props.data;
    }
    this.state = {
      data,
      isLoading: data == null,
    };
  }

  async componentDidMount() {
    let { data } = this.state;
    const { location } = this.props;
    const canHover = !(matchMedia('(hover: none)').matches);
    if (canHover) {
      document.body.classList.add('can-hover');
    }
    if (!data) {
      data = {};
      try {
        this.setState({ isLoading: true });
        const loadedData = await fetchRoute(location.pathname);
        data.projects = loadedData.projects;
      } catch (e) {
        data.projects = [];
      }
      this.setState({ isLoading: false, data });
    }
  }

  async componentDidUpdate(prevProps) {
    let { data } = this.state;
    const { location } = this.props;
    if (prevProps.location.pathname !== location.pathname) {
      data = {};
      try {
        this.setState({ isLoading: true });
        const loadedData = await fetchRoute(location.pathname);
        data.projects = loadedData.projects;
      } catch (e) {
        data.projects = [];
      }
      this.setState({ isLoading: false, data });
    }
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <DataContext.Provider value={data}>
        <LoadingContext.Provider value={isLoading}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="/portfolio" />
              )}
            />
            <Route
              path="/portfolio"
              component={Portfolio}
            />
            <Route component={NotFound} />
          </Switch>
        </LoadingContext.Provider>
      </DataContext.Provider>
    );
  }
}

export default withRouter(Root);
// export default injectSheet(styles)(Root);

Root.propTypes = {
  data: PropTypes.shape({}),
};

Root.defaultProps = {
  data: null,
};
