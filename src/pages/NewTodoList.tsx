import React from 'react';

import AddItemForm from 'components/todo-lists/AddItemForm';
import { useAppDispatch } from 'hooks/types';
import { createTodoList } from 'store/todo-lists-slice';

const baseUrl = process.env.REACT_APP_BASE_URL || '';

const NewTodoList = () => {
  const dispatch = useAppDispatch();

  const addTodoList = (todoListTitle: string) => {
    dispatch(createTodoList({ baseUrl, todoListTitle }));
  };

  return (
    <div>
      <AddItemForm onAddItem={addTodoList} />
    </div>
  );
};

export default NewTodoList;
