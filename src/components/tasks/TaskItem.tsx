import Button from 'components/input/Button';
import EditableSpan from 'components/input/EditableSpan';
import { useAppDispatch, useAppSelector } from 'hooks/types';
import { useParams } from 'react-router-dom';
import { deleteTask, updateTask } from 'store/tasks-slice';

import styles from './TaskItem.module.scss';

type TaskItemProps = {
  taskId: string;
  title: string;
};

const TaskItem = ({ taskId, title }: TaskItemProps) => {
  const { id } = useParams();
  const todoLists = useAppSelector(state => state.todoList.todoLists);
  const currentTodoList = todoLists.find(todoList => todoList.id === id);

  const dispatch = useAppDispatch();

  const deleteTaskHandler = () => {
    dispatch(deleteTask({ todoListId: id, taskId }));
  };

  const onUpdateTaskHandler = (newTitle: string) => {
    dispatch(updateTask({ todoListId: id, taskId, model: { title: newTitle } }));
  };

  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <input type="checkbox" />
          <figcaption>{currentTodoList && currentTodoList.title}</figcaption>
        </blockquote>
        <EditableSpan onSendData={onUpdateTaskHandler} title={title} />
      </figure>
      <div>
        <Button onButtonClick={deleteTaskHandler} title="Delete" />
      </div>
    </li>
  );
};

export default TaskItem;
