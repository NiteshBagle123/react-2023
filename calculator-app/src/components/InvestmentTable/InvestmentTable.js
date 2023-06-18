import classes from './InvestmentTable.module.css';

export default function InvestmentTable (props) {
    console.log('print calculationTable', props.calculationTable);
    return (
        <table className={classes.result}>
        <thead>
            <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            {/* <th>Total Interest</th> */}
            <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {props.calculationTable.length && props.calculationTable.map(({
                year, savingsEndOfYear, yearlyContribution, yearlyInterest
            }) => (
                <tr key={`${year}_${savingsEndOfYear}_${yearlyContribution}_${yearlyInterest}`}>
                    <td>{year}</td>
                    <td>{savingsEndOfYear}</td>
                    <td>{yearlyInterest}</td>
                    {/* <td>TOTAL INTEREST GAINED</td> */}
                    <td>{yearlyContribution}</td>
                </tr>
            ))
            }
        </tbody>
        </table>
    );
}