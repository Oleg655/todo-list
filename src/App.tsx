import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/types';
import { getTodoLists } from 'store/todo-list-slice';

const baseUrl = process.env.REACT_APP_BASE_URL || '';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.todoList.todoLists);
  useEffect(() => {
    dispatch(getTodoLists(baseUrl));
  }, [dispatch]);

  return (
    <div>
      <header>{JSON.stringify(data)}</header>
    </div>
  );
};

export default App;
