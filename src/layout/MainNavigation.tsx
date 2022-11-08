import { useAppDispatch, useAppSelector } from 'hooks/types';
import { NavLink } from 'react-router-dom';
import { authLogout } from 'store/auth-slice';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const logoutClickHandler = () => {
    dispatch(authLogout());
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Create your own todo</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="todo-lists"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              All Todo
            </NavLink>
          </li>

          <li>
            <NavLink
              to="new-todo-lists"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              New Todo
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <NavLink
                onClick={logoutClickHandler}
                to="login"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="login"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
