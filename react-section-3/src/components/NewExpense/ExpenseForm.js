import React, { useState, useReducer } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('0.00');
    const [date, setDate] = useState('');
    const [submitData, onSubmitData] = useState({});
    // const [enteredVal, setEnteredVal] = useState({
    //     title: '',
    //     amount: '0.00',
    //     date: ''
    // });
    // const onInputChangeHandler = (event) => setEnteredVal({
    //     ...enteredVal,
    //     title: event.target.value
    // });
    // const onInputChangeHandler = (event) => setEnteredVal((prevState) => ({
    //     ...prevState,
    //     title: event.target.value
    // }));
    const onTitleChangeHandler = (updatedTitle) => setTitle(updatedTitle);
    const onAmountChangeHandler = (updatedAmount) => setAmount(updatedAmount);
    const onDateChangeHandler = (dateVal) => setDate(dateVal);
    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        onSubmitData({
            title,
            amount,
            date: new Date(date)
        });
        console.log('Print submitData', submitData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={(event) => onSubmitFormHandler(event)}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        onChange={(event) => onTitleChangeHandler(event.target.value)}
                        value={title}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        onChange={(event) => onAmountChangeHandler(event.target.value)} 
                        value={amount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01' 
                        max='2023-12-31'
                        onChange={(event) => onDateChangeHandler(event.target.value)} 
                        value={date}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;