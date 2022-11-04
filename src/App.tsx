import { useEffect } from 'react';

import { useAppDispatch } from 'hooks/types';
import Layout from 'layout/Layout';
import AllTasks from 'pages/AllTasks';
import AllTodoLists from 'pages/AllTodoLists';
import NewTask from 'pages/NewTask';
import NewTodoList from 'pages/NewTodoList';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getTodoLists } from 'store/todo-lists-slice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/todo-lists" />} />
        <Route path="/todo-lists" element={<AllTodoLists />} />

        <Route path="/todo-lists/:id" element={<AllTasks />} />
        <Route path="todo-lists/:id/edit" element={<NewTask />} />

        <Route path="/new-todo-lists" element={<NewTodoList />} />
      </Routes>
    </Layout>
  );
};

export default App;
