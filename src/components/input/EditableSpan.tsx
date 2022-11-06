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

  // console.log(editMode);

  const onEditMode = () => {
    setEditMode(true);
    setChangedTitle(title);
  };

  const onViewMode = () => {
    setEditMode(false);
    onSendData(changedTitle);
  };

  const pressEnterKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEditMode();
    }
  };

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setChangedTitle(event.currentTarget.value);
  };

  return (
    <div onDoubleClick={onEditMode} className={styles.wrapper}>
      {editMode ? (
        <>
          <input
            onChange={onChangeTitleHandler}
            type="text"
            autoFocus
            value={changedTitle}
            onBlur={onViewMode}
            onKeyPress={pressEnterKeyHandler}
            className={styles.input}
          />
          <Button onButtonClick={onViewMode} title="Done" />
        </>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};

export default EditableSpan;
