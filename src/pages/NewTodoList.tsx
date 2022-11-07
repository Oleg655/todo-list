import React from 'react';

import AddItemForm from 'components/input/AddItemForm';
import { useAppDispatch } from 'hooks/types';
import { useNavigate } from 'react-router-dom';
import { createTodoList } from 'store/todo-lists-slice';

const NewTodoList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addTodoList = (todoListTitle: string) => {
    dispatch(createTodoList({ todoListTitle }));
    navigate('/todo-lists');
  };

  return (
    <div>
      <AddItemForm title="Add New Todo" onAddItem={addTodoList} />
    </div>
  );
};

export default NewTodoList;
