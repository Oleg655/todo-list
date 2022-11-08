import { useEffect } from 'react';

import { useAppDispatch } from 'hooks/types';
import Layout from 'layout/Layout';
import AllTasks from 'pages/AllTasks';
import AllTodoLists from 'pages/AllTodoLists';
import Login from 'pages/Login';
import NewTodoList from 'pages/NewTodoList';
import { Route, Routes } from 'react-router-dom';
import { getTodoLists } from 'store/todo-lists-slice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
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
