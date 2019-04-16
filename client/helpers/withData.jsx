import React from 'react';
import DataContext from './DataContext';

const withData = Component => props => (
  <DataContext.Consumer>{data => <Component data={data} {...props} />}</DataContext.Consumer>
);

export default withData;
