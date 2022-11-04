import { ChangeEvent, useState, KeyboardEvent } from 'react';

import Button from './Button';
import styles from './EditableSpan.module.scss';

type EditableSpanProps = {
  title: string;
  onSendData: (newTitle: string) => void;
};

const EditableSpan = ({ title, onSendData }: EditableSpanProps) => {
  const [editMode, setEditMode] = useState(false);
  const [changedTitle, setChangedTitle] = useState('');

  const onEditMode = () => {
    setEditMode(true);
    setChangedTitle(title);
  };

  const onViewMode = () => {
    setEditMode(false);
    onSendData(changedTitle);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setEditMode(false);
      onSendData(changedTitle);
    }
  };

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setChangedTitle(event.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <>
          <input
            onChange={onChangeTitleHandler}
            type="text"
            autoFocus
            value={changedTitle}
            onBlur={onViewMode}
            onKeyDown={onKeyPressHandler}
            className={styles.input}
          />
          <Button onButtonClick={onViewMode} title="Done" />
        </>
      ) : (
        <>
          <span onDoubleClick={onEditMode}>{title}</span>
          <Button onButtonClick={onEditMode} title="Edit task" />
        </>
      )}
    </div>
  );
};

export default EditableSpan;
