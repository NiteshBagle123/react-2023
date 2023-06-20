import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
      return {
        value: action.val,
        isValid: action.val.includes('@')
      }
    }

    if(action.type === 'INPUT_BLUR') {
      return {
        value: state && state.value,
        isValid: (state && state.value && state.value.includes('@')) || false
      }
    }
    return {
      value: '',
      isValid: false
    }
  };
  const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
      return {
        value: action.val,
        isValid: action.val.includes('@')
      }
    }

    if(action.type === 'INPUT_BLUR') {
      return {
        value: state && state.value,
        isValid: (state && state.value && state.value.trim().length > 6) || false
      }
    }
    return {
      value: '',
      isValid: false
    }
  }
  const [emailState, dispatchEmail] = useReducer(emailReducer);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer);
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking execution');
      setFormIsValid(
        emailState && emailState.isValid && passwordState && passwordState.value && passwordState.value.trim().length > 6
      );
    }, 500);

    return () => clearTimeout(identifier);
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    })
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_INPUT',
      val: event.target.value
    })
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR'
    })
    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_BLUR'
    })
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState && emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <Input 
            inputType="email"
            inputId="email"
            inputState={emailState}
            inputChangeHandler={emailChangeHandler}
            inputValidatorHandler={validateEmailHandler}
          />
          {/* <input
            type="email"
            id="email"
            value={emailState && emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          /> */}
        </div>
        <div
          className={`${classes.control} ${
            passwordState && passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <Input 
            inputType="password"
            inputId="password"
            inputState={passwordState}
            inputChangeHandler={passwordChangeHandler}
            inputValidatorHandler={validatePasswordHandler}
          />
          {/* <input
            type="password"
            id="password"
            value={passwordState && passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          /> */}
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
