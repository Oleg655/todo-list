import { ChangeEvent, useState } from 'react';

// import LoadingSpinner from 'components/ui/LoadingSpinner';
import Wrapper from 'components/ui/Wrapper';

import styles from './AddItemForm.module.scss';

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
    }
  };

  return (
    <Wrapper>
      <div>
        <div className={styles.control}>
          <label htmlFor="text">
            <input onChange={onChangeHandler} value={title} id="text" />
          </label>
        </div>

        <div className={styles.actions}>
          <button onClick={onAddItemHandler} type="button" className="btn">
            Add
          </button>
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
