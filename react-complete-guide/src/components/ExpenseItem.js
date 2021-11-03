import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = props.expenseData.date;
    const expenseTitle = props.expenseData.title;
    const expenseAmount = props.expenseData.amount;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;