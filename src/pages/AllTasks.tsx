import { useEffect } from 'react';

import TasksList from 'components/tasks/TasksList';
import { useAppDispatch } from 'hooks/types';
import { useParams } from 'react-router-dom';
import { createTask, deleteTask, getTasks, updateTask } from 'store/tasks-slice';

const baseUrl = process.env.REACT_APP_BASE_URL || '';

const AllTasks = () => {
  const params = useParams<string>();
  const dispatch = useAppDispatch();
  // const tasks = useAppSelector(state => state.tasks.tasks);

  const todoListId = params.id;
  const title = 'NEW TASK???????';
  const taskId = 'a2fbe001-65e6-48de-a442-81d4d082084f';
  const newTitle = 'UPDATE TITLE>>>>>>>';

  useEffect(() => {
    dispatch(getTasks({ baseUrl, todoListId }));
  }, [dispatch, todoListId]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(createTask({ baseUrl, todoListId, taskTitle: title }));
        }}
      >
        add
      </button>
      <TasksList />
      <button
        type="button"
        onClick={() => {
          dispatch(deleteTask({ baseUrl, todoListId, taskId }));
        }}
      >
        delete
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(updateTask({ baseUrl, todoListId, model: { title: newTitle } }));
        }}
      >
        dfb
      </button>
    </>
  );
};

export default AllTasks;
