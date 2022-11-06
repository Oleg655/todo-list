import { useEffect } from 'react';

// import Button from 'components/input/Button';
// import Input from 'components/input/Input';
import AddItemForm from 'components/input/AddItemForm';
import TasksList from 'components/tasks/TasksList';
import { useAppDispatch } from 'hooks/types';
import { useParams } from 'react-router-dom';
import { createTask, getTasks } from 'store/tasks-slice';

const AllTasks = () => {
  const params = useParams<string>();
  const dispatch = useAppDispatch();
  // const tasks = useAppSelector(state => state.tasks.tasks);

  const todoListId = params.id;

  const addTaskHandler = (newTitle: string) => {
    dispatch(createTask({ todoListId, taskTitle: newTitle }));
  };

  // const addTaskButtonHandler = () => {};

  useEffect(() => {
    dispatch(getTasks({ todoListId }));
  }, [dispatch, todoListId]);

  return (
    <>
      <AddItemForm title="Add New Task" onAddItem={addTaskHandler} />
      <TasksList />;
    </>
  );
};

export default AllTasks;
