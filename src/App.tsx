import { useEffect } from 'react';

import EditTask from 'components/tasks/EditTask';
import { useAppDispatch } from 'hooks/types';
import Layout from 'layout/Layout';
import AllTasks from 'pages/AllTasks';
import AllTodoLists from 'pages/AllTodoLists';
import NewTodoList from 'pages/NewTodoList';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getTodoLists } from 'store/todo-lists-slice';

const baseUrl = process.env.REACT_APP_BASE_URL || '';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoLists(baseUrl));
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/todo-lists" />} />
        <Route path="/todo-lists" element={<AllTodoLists />} />

        <Route path="/todo-lists/:taskId" element={<AllTasks />} />
        <Route path="todo-lists/:taskId/task" element={<EditTask />} />
        <Route />

        <Route path="/new-todo-lists" element={<NewTodoList />} />
      </Routes>
    </Layout>
  );
};

export default App;
