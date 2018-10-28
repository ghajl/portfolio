import React from 'react';
import DataContext from './DataContext';

function withData(Component) {
  return props => (
    <DataContext.Consumer>
      {data => <Component data={data} {...props} />}
    </DataContext.Consumer>
  );
}

export default withData;
