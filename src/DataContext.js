import React from 'react';

const DataContext = React.createContext({isLoading: false, data: {projects: []}});

export default DataContext;
