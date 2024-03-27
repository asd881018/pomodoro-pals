// Layout.tsx

import React, { ReactNode } from 'react';
import TopBarMenu from './TopBarMenu';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <TopBarMenu />
      {children}
    </div>
  );
};

export default Layout;
