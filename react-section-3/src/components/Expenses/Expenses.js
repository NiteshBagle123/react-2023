import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "../UI/Card";
function Expenses () {
    const expenseArr = [{
        id: 1,
        date: new Date(2023, 3, 31),
        title: "test1",
        amount: "299"
      }, {
        id: 2,
        date: new Date(2023, 5, 31),
        title: "test2",
        amount: "2991"
      }];
    return (
        <div className="expenses">
            {
                expenseArr.map(
                    ({ id, date, title, amount}) => <ExpenseItems 
                        key={id} 
                        date={date} 
                        title={title} 
                        amount={amount} 
                    />
                )
            }
        </div>
    );
}

export default Expenses;