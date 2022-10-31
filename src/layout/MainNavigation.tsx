import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="todo-lists"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              All Todo Lists
            </NavLink>
          </li>
          <li>
            <NavLink
              to="new-todo-lists"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              New Todo List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
