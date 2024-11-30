import React from 'react';
import Grid from '@mui/material/Grid2';

// components
import Nav from './component/nav'


function AdminPage({ children }) {

  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default AdminPage;
