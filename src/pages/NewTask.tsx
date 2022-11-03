import AddItemForm from 'components/input/AddItemForm';
import { useAppDispatch } from 'hooks/types';
import { useParams } from 'react-router-dom';
import { createTask } from 'store/tasks-slice';

const baseUrl = process.env.REACT_APP_BASE_URL || '';

const NewTask = () => {
  const dispatch = useAppDispatch();

  const params = useParams();
  const todoListId = params.id;

  const addTask = (taskTitle: string) => {
    dispatch(createTask({ baseUrl, todoListId, taskTitle }));
  };

  return (
    <div>
      <AddItemForm onAddItem={addTask} />
    </div>
  );
};

export default NewTask;
