import React, { useState } from 'react';
import classes from './CalculatorForm.module.css';
import Button from '../UI/Button/Button';
export default function CalculatorForm (props) {
    const [currentSavings, setCurrentSavings] = useState(0);
    const [yearlySavings, setYearlySavings] = useState(0);
    const [expectedInterest, setExpectedInterest] = useState(0);
    const [investmentDuration, setInvestmentDuration] = useState(0);
    const onResetClickHandler = () => {
      setCurrentSavings(0);
      setYearlySavings(0);
      setExpectedInterest(0);
      setInvestmentDuration(0);
    }
    const onAddExpenseSubmitHandler = (event) => {
      event.preventDefault();
      props.annualCalculation({
        currentSavings,
        yearlySavings,
        expectedInterest,
        investmentDuration
      });
    };
    return (
      <form className={classes.form} onSubmit={onAddExpenseSubmitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(event) => setCurrentSavings(event.target.value)} value={currentSavings} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(event) => setYearlySavings(event.target.value)} value={yearlySavings} />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event) => setExpectedInterest(event.target.value)} value={expectedInterest}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(event) => setInvestmentDuration(event.target.value)} value={investmentDuration} />
          </p>
        </div>
        <p className={classes.actions}>
          <Button type="reset" className="buttonAlt" onClick={onResetClickHandler}>
            Reset
          </Button>
          <Button type="submit" className="button">
            Calculate
          </Button>
        </p>
      </form>
    );
}