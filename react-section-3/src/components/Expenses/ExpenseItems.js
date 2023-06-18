import { useState } from 'react'; 
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItems (props) {
    const { date, title, amount } = props;
    const [titleVal, setTitle] = useState(title);
    const onTitleChangeClickHandler = () => {
        setTitle('Title changed!')
    }
    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{titleVal}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={onTitleChangeClickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItems;