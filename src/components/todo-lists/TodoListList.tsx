import { useAppSelector } from 'hooks/types';

import TodoListItem from './TodoListItem';
import styles from './TodoListList.module.scss';

const TodoListsList = () => {
  const todoLists = useAppSelector(state => state.todoList.todoLists);

  return (
    <ul className={styles.list}>
      {todoLists.map(todoList => (
        <TodoListItem key={todoList.id} id={todoList.id} title={todoList.title} />
      ))}
    </ul>
  );
};

export default TodoListsList;
