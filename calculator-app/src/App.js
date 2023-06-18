
import Header from "./components/UI/Header/Header";
import CalculatorForm from "./components/Calculator/CalculatorForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";
import { useState } from "react";

function App() {
  const [calculationTable, setCalculationTable] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results
    let { currentSavings, yearlySavings, expectedInterest, investmentDuration } = userInput
    const yearlyContribution = +yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +expectedInterest / 100;
    const duration = +investmentDuration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
      setCalculationTable(prevState => [...prevState, ...yearlyData])
    }
  };
  return (
    <div>
      <Header />
      <CalculatorForm annualCalculation={calculateHandler}/>
      {(calculationTable.length && <InvestmentTable calculationTable={calculationTable}/>) || <p style={{ textAlign: 'center'}}>No investment available for display</p>}
    </div>
  );
}

export default App;
