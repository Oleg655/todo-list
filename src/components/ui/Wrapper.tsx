import styles from './Wrapper.module.css';

type WrapperProps = {
  children: JSX.Element;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
