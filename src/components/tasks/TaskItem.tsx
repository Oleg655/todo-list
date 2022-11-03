import { Link } from 'react-router-dom';

import styles from './TaskItem.module.scss';

type TaskItemProps = {
  title: string;
};

const TaskItem = ({ title }: TaskItemProps) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{title}</p>
          <figcaption>name todolist</figcaption>
        </blockquote>
      </figure>
      <Link to="edit">Edit Task</Link>
    </li>
  );
};

export default TaskItem;
