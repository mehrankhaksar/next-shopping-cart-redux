import React, { FunctionComponent, ReactNode } from 'react';
import Navbar from './Navbar';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
