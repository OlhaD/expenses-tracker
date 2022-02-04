import { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  const expenseSaveHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      // todo: random is used for the demo only
      id: Math.random().toString(),
    };
    props.onExpenseAdded(expense);
  };

  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenseClickChanged = (change) => {
    setIsEditing(change);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <div className="add-new">
          <button type="button" onClick={() => addNewExpenseClickChanged(true)}>
            Add New Expense
          </button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onExpenseSave={expenseSaveHandler}
          onExpenseAddClosed={() => addNewExpenseClickChanged(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
