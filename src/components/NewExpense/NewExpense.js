import { useState } from "react";
import Button from "../UI/Button/Button";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import classes from "./NewExpense.module.scss";

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
    <div className={classes.newExpense}>
      {!isEditing && (
        <div className="add-new">
          <Button type="button" onClick={() => addNewExpenseClickChanged(true)}>
            Add New Expense
          </Button>
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
