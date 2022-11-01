import { Link } from 'react-router-dom';

import styles from './TodoListList.module.scss';

type TodoListItemProps = {
  id: string;
  title: string;
};

const TodoListItem = ({ id, title }: TodoListItemProps) => {
  return (
    <li className={styles.item}>
      <blockquote>{title}</blockquote>
      <Link to={`/todo-lists/${id}`}>View Tasks</Link>
    </li>
  );
};

export default TodoListItem;
