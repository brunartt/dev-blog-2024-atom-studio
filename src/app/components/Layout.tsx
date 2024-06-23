// src/app/components/Layout.tsx
import React from 'react';
import GlobalHeader from './NavBar';
import GlobalFooter from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </div>
  );
};

export default Layout;
