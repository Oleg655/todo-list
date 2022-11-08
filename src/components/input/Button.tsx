import styles from './Button.module.css';

type ButtonProps = {
  title: string;
  onButtonClick: () => void;
};

const Button = ({ title, onButtonClick }: ButtonProps) => {
  const onHandleButtonClick = () => {
    onButtonClick();
  };

  return (
    <button onClick={onHandleButtonClick} className={styles.btn} type="button">
      {title}
    </button>
  );
};

export default Button;
