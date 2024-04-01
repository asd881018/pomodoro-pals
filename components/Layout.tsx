// Layout.tsx

import React, { ReactNode, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';

import { StyleContext } from '../contexts/StyleContext';

interface LayoutProps {
  children: ReactNode;
  page: string;
}

const Layout = ({ children, page } : LayoutProps) => {
  const { font } = useContext(StyleContext);
  return (
    <div className={`bg-primary min-h-screen h-full min-w-screen flex flex-col justify-between ${font}`}>
      <Header />
      {children}
      <Footer page={page}/>
    </div>
  );
};

export default Layout;
