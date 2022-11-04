import { ChangeEvent, useState, KeyboardEvent } from 'react';

// import LoadingSpinner from 'components/ui/LoadingSpinner';
import Wrapper from 'components/ui/Wrapper';

import styles from './AddItemForm.module.scss';
import Button from './Button';

type AddItemFormProps = {
  onAddItem: (title: string) => void;
};

const AddItemForm = ({ onAddItem }: AddItemFormProps) => {
  const [title, setTitle] = useState('');
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onAddItemHandler = () => {
    if (title.trim() !== '') {
      onAddItem(title);
      setTitle('');
    }
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAddItemHandler();
    }
  };

  return (
    <Wrapper>
      <div>
        <div className={styles.control}>
          <label htmlFor="text">
            <input
              onKeyDown={onKeyPressHandler}
              onChange={onChangeHandler}
              value={title}
              id="text"
            />
          </label>
        </div>

        <div className={styles.actions}>
          <Button onButtonClick={onAddItemHandler} title="Add" />
        </div>
      </div>
      {/* {props.isLoading && (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )} */}
    </Wrapper>
  );
};

export default AddItemForm;
