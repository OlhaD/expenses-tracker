import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.scss';

const NewExpense = (props) => {
    const expenseSaveHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            // todo: random is used for the demo only
            id: Math.random().toString()
        };
        props.onExpenseAdded(expense);
    }

    return (<div className='new-expense'>
        <ExpenseForm onExpenseSave={expenseSaveHandler}/>
    </div>);
}

export default NewExpense;