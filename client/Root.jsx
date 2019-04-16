/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import DataContext from './helpers/DataContext';
import LoadingContext from './helpers/LoadingContext';
import fetchData from '../util/fetchData';

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
      isLoading: data == null
    };
  }

  loadData = async () => {
    const data = {};
    try {
      this.setState({ isLoading: true });
      const loadedData = await fetchData(location.pathname);
      data.projects = loadedData.projects;
    } catch (e) {
      data.projects = [];
    }
    this.setState({ isLoading: false, data });
  };

  async componentDidMount() {
    let { data } = this.state;
    const { location } = this.props;
    const canHover = !matchMedia('(hover: none)').matches;
    if (canHover) {
      document.body.classList.add('can-hover');
    }
    if (!data) {
      await this.loadData();
    }
  }

  async componentDidUpdate(prevProps) {
    let { data } = this.state;
    const { location } = this.props;
    if (prevProps.location.pathname !== location.pathname) {
      await this.loadData();
    }
  }

  render() {
    const { data, isLoading } = this.state;

    const { route } = this.props;
    return (
      <DataContext.Provider value={data}>
        <LoadingContext.Provider value={isLoading}>
          <Switch>{renderRoutes(route.routes)}</Switch>
        </LoadingContext.Provider>
      </DataContext.Provider>
    );
  }
}

export default withRouter(Root);

Root.propTypes = {
  data: PropTypes.shape({})
};

Root.defaultProps = {
  data: null
};
