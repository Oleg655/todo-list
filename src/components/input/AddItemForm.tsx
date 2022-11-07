import { ChangeEvent, useState, KeyboardEvent } from 'react';

import styles from './AddItemForm.module.scss';
import Button from './Button';

type AddItemFormProps = {
  onAddItem: (title: string) => void;
  title: string;
};

const AddItemForm = ({ onAddItem, title }: AddItemFormProps) => {
  const [newTitle, setTitle] = useState('');
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onAddItemHandler = () => {
    if (newTitle.trim() !== '') {
      onAddItem(newTitle);
      setTitle('');
    }
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAddItemHandler();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onKeyDown={onKeyPressHandler}
        onChange={onChangeHandler}
        value={newTitle}
        placeholder={title}
      />

      <Button onButtonClick={onAddItemHandler} title="Add" />
    </div>
  );
};

export default AddItemForm;
