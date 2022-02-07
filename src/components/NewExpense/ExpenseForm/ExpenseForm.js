import { useState } from "react";
import Button from "../../UI/Button/Button";
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
  };

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
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={state.title}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0.01"
              step="0.01"
              value={state.amount}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              min="2019-01-01"
              max="2022-12-31"
              value={state.date}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <Button type="button" onClick={cancelHandler}>
            Cancel
          </Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
