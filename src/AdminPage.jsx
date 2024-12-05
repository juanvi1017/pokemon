import React from 'react';

// components
import Nav from './component/Nav'


function AdminPage({ children }) {

  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default AdminPage;
