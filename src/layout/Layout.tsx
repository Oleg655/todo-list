import React from 'react';

import styles from './Layout.module.scss';
import MainNavigation from './MainNavigation';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{children}</main>;
    </>
  );
};

export default Layout;
