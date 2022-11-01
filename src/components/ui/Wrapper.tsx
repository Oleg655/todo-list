import styles from './Wrapper.module.scss';

type WrapperProps = {
  children: JSX.Element;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
