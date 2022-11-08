import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/types';
import { useNavigate } from 'react-router-dom';
import { getTodoLists } from 'store/todo-lists-slice';

import TodoListItem from './TodoListItem';
import styles from './TodoListList.module.css';

const TodoListsList = () => {
  const dispatch = useAppDispatch();
  const todoLists = useAppSelector(state => state.todoList.todoLists);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(getTodoLists());
  }, [dispatch, navigate, isLoggedIn]);

  if (!isLoggedIn) {
    navigate('/login');
  }

  return (
    <ul className={styles.list}>
      {todoLists.map(todoList => (
        <TodoListItem key={todoList.id} id={todoList.id} title={todoList.title} />
      ))}
    </ul>
  );
};

export default TodoListsList;
