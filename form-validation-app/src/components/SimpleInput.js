import { useRef, useState, useEffect } from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const nameInputRef = useRef('');
  const { 
    value: enteredName, 
    enteredInputInvalid,         
    enteredValueChangeHandler,
    enteredInputBlurHandler
  } = useInput(nameInputRef);
  // const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  //   setEnteredNameTouched(true);
  //   if(name.trim()) {
  //     setIsError(false);
  //   }
  // }

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  //   if(!name.trim()) {
  //     setIsError(true);
  //   }
  // }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true)
    if(!enteredName.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);
    console.log(nameInputRef.current.value)
  }

  // const nameInputIsInvalid = isError && enteredNameTouched;
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={(enteredInputInvalid && 'form-control invalid') ||'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text' 
          id='name'
          onChange={enteredValueChangeHandler}
          onBlur={enteredInputBlurHandler}
          value={enteredName}
        />
        {enteredInputInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
