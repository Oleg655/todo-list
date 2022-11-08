import { useEffect } from 'react';

import AddItemForm from 'components/input/AddItemForm';
import { useAppDispatch, useAppSelector } from 'hooks/types';
import { useParams } from 'react-router-dom';
import { createTask, getTasks } from 'store/tasks-slice';

import TaskItem from './TaskItem';
import style from './TasksList.module.css';

const TasksList = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);

  const params = useParams<string>();
  const todoListId = params.id;

  const dispatch = useAppDispatch();

  const addTaskHandler = (newTitle: string) => {
    dispatch(createTask({ todoListId, taskTitle: newTitle }));
  };

  useEffect(() => {
    dispatch(getTasks({ todoListId }));
  }, [dispatch, todoListId]);

  return (
    <ul className={style.list}>
      <AddItemForm title="Add New Task" onAddItem={addTaskHandler} />
      {tasks.map(task => (
        <TaskItem key={task.id} taskId={task.id} title={task.title} />
      ))}
    </ul>
  );
};

export default TasksList;
