import React from 'react';
import LoadingContext from './LoadingContext';

function withLoading(Component) {
  return props => (
    <LoadingContext.Consumer>
      {data => <Component isLoading={data} {...props} />}
    </LoadingContext.Consumer>
  );
}

export default withLoading;
