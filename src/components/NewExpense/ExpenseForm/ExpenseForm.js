import { useState } from "react";
import classes from "./ExpenseForm.module.scss";

const ExpenseForm = (props) => {
  const [state, setState] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const cancelHandler = () => {
    props.onExpenseAddClosed();
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: state.title,
      amount: state.amount,
      date: state.date,
    };

    props.onExpenseSave(expenseData);

    setState({
      title: "",
      amount: "",
      date: "",
    });
    props.onExpenseAddClosed();
  };

  return (
    <div className={classes.expenseForm}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              name="amount"
              value={state.amount}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              name="date"
              value={state.date}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
