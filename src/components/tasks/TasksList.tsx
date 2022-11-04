import { useAppSelector } from 'hooks/types';

import TaskItem from './TaskItem';
import style from './TasksList.module.scss';

const TasksList = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);

  return (
    <ul className={style.list}>
      {tasks.map(task => (
        <TaskItem key={task.id} taskId={task.id} title={task.title} />
      ))}
    </ul>
  );
};

export default TasksList;
