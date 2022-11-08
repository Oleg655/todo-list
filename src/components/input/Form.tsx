import { FormEvent, useState, ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/types';
import useInput from 'hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { authLogin } from 'store/auth-slice';

import styles from './Form.module.css';

const Form = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);

  const checkBoxClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.currentTarget.checked);
  };

  const validateName = (value: string) => value.trim() !== '';
  const validatePassword = (value: string) => value.trim() !== '';

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateName);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(validatePassword);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLoggedIn) {
      navigate('/login');
    }
    if (!enteredEmailIsValid) {
      return;
    }
    dispatch(authLogin({ email: enteredEmail, password: enteredPassword, rememberMe }));

    resetEmailInput();
    resetPasswordInput();

    navigate('/todo-lists');
  };

  const nameInputClasses = emailInputHasError
    ? `${styles.form}${styles.invalid}`
    : styles.form;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">
          Your Name
          <input
            onChange={emailChangeHandler}
            type="text"
            id="email"
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
        </label>
        {emailInputHasError && <p className={styles.error}>Name is must not be empty</p>}
      </div>

      <div className={nameInputClasses}>
        <label htmlFor="password">
          Your Name
          <input
            onChange={passwordChangeHandler}
            type="password"
            id="password"
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
        </label>
        {passwordInputHasError && (
          <p className={styles.error}>Password is must not be empty</p>
        )}
      </div>

      <div className={nameInputClasses}>
        <label htmlFor="rememberMe">
          Remember Me
          <input
            onChange={checkBoxClickHandler}
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
          />
        </label>
      </div>

      <div className={styles.form}>
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
