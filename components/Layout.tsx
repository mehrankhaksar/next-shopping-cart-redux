import React, { FunctionComponent } from 'react';
import Navbar from './Navbar';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
