import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.scss';

const NewExpense = () => {
    const expenseSaveHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            // todo: random is used for the demo only
            id: Math.random().toString()
        };
        console.log(expense);
    }

    return (<div className='new-expense'>
        <ExpenseForm onExpenseSave={expenseSaveHandler}/>
    </div>);
}

export default NewExpense;