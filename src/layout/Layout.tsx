import React from 'react';

import styles from './Layout.module.scss';
import MainNavigation from './MainNavigation';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.main}>
      <MainNavigation />
      <main>{children}</main>;
    </div>
  );
};

export default Layout;
