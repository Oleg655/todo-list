import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  onButtonClick: () => void;
};

const Button = ({ title, onButtonClick }: ButtonProps) => {
  return (
    <button onClick={onButtonClick} className={styles.btn} type="button">
      {title}
    </button>
  );
};

export default Button;
