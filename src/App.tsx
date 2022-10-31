import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/types';
import {
  createTodoList,
  getTodoLists,
  deleteTodoList,
  updateTodoList,
} from 'store/todo-lists-slice';

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
      <button
        type="button"
        onClick={() => {
          dispatch(createTodoList({ baseUrl, todoListTitle: 'dfkvndfvndfv' }));
        }}
      >
        create
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(
            deleteTodoList({
              baseUrl,
              todoListId: '69f26d0e-b631-476d-ab2b-8f9f9ba187dc',
            }),
          );
        }}
      >
        delete
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(
            updateTodoList({
              baseUrl,
              todoListId: '0e5c07fc-43d0-4aa1-89e6-b608e8cbd5b7',
              todoListTitle: 'ADRONE',
            }),
          );
        }}
      >
        update
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(
            createTodoList({
              baseUrl,
              todoListTitle: 'BAAAD!!!!!',
            }),
          );
        }}
      >
        create
      </button>
    </div>
  );
};

export default App;
