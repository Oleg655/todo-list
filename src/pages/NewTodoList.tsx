import React from 'react';

import AddItemForm from 'components/input/AddItemForm';
import { useAppDispatch } from 'hooks/types';
import { createTodoList } from 'store/todo-lists-slice';

const NewTodoList = () => {
  const dispatch = useAppDispatch();

  const addTodoList = (todoListTitle: string) => {
    dispatch(createTodoList({ todoListTitle }));
  };

  return (
    <div>
      <AddItemForm title="Add New Todo" onAddItem={addTodoList} />
    </div>
  );
};

export default NewTodoList;
