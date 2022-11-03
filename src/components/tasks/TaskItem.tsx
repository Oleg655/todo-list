import { useAppSelector } from 'hooks/types';
import { Link, useParams } from 'react-router-dom';

import styles from './TaskItem.module.scss';

type TaskItemProps = {
  title: string;
};

const TaskItem = ({ title }: TaskItemProps) => {
  const { id } = useParams();
  const todoLists = useAppSelector(state => state.todoList.todoLists);
  const currentTodoList = todoLists.find(todoList => todoList.id === id);

  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{title}</p>
          <figcaption>{currentTodoList!.title}</figcaption>
        </blockquote>
      </figure>
      <Link to="edit">Edit Task</Link>
    </li>
  );
};

export default TaskItem;
