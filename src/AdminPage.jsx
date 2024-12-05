import React from 'react';

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
