import { useState } from 'react';

const useInput = (validateVal) => {
    const [value, setEnteredValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const enteredInputInvalid = isError && enteredNameTouched;

    const enteredValueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        setEnteredNameTouched(true);
        if(value.trim()) {
          setIsError(false);
        }
      }
    
      const enteredInputBlurHandler = () => {
        setEnteredNameTouched(true);
        if(!value.trim()) {
          setIsError(true);
        }
      }

    return { 
        value,
        enteredInputInvalid,
        enteredValueChangeHandler,
        enteredInputBlurHandler
    };
};

export default useInput;