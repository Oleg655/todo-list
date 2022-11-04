import Button from 'components/input/Button';
import EditableSpan from 'components/input/EditableSpan';
import { useAppDispatch } from 'hooks/types';
import { Link } from 'react-router-dom';
import { deleteTodoList, updateTodoList } from 'store/todo-lists-slice';

import styles from './TodoListItem.module.scss';

type TodoListItemProps = {
  id: string;
  title: string;
};

const TodoListItem = ({ id, title }: TodoListItemProps) => {
  const dispatch = useAppDispatch();

  const deleteTodoListHandler = () => {
    dispatch(deleteTodoList({ todoListId: id }));
  };

  const onUpdateTodoListHandler = (newTitle: string) => {
    dispatch(updateTodoList({ todoListId: id, todoListTitle: newTitle }));
  };

  return (
    <li className={styles.item}>
      <EditableSpan onSendData={onUpdateTodoListHandler} title={title} />
      <Link to={`/todo-lists/${id}`}>View Tasks</Link>
      <Button onButtonClick={deleteTodoListHandler} title="delete" />
    </li>
  );
};

export default TodoListItem;
