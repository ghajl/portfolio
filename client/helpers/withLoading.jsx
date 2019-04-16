import React from 'react';
import LoadingContext from './LoadingContext';

const withLoading = Component => props => (
  <LoadingContext.Consumer>
    {data => <Component isLoading={data} {...props} />}
  </LoadingContext.Consumer>
);

export default withLoading;
