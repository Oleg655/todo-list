import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/types';
import Layout from 'layout/Layout';
import AllTasks from 'pages/AllTasks';
import AllTodoLists from 'pages/AllTodoLists';
import Login from 'pages/Login';
import NewTodoList from 'pages/NewTodoList';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authMe } from 'store/auth-slice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  // const me = useAppSelector(state => state.auth.me);

  useEffect(() => {
    dispatch(authMe());
  }, []);

  // if (!me) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <Layout>
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Navigate to="/login" />} />}

        <Route path="/login" element={<Login />} />
        <Route path="/todo-lists" element={<AllTodoLists />} />

        <Route path="/todo-lists/:id" element={<AllTasks />} />

        <Route path="/new-todo-lists" element={<NewTodoList />} />
        <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;
