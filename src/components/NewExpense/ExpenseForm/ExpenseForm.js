import { useState } from "react";
import "./ExpenseForm.scss";

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
  };

  return (
    <div className="expense-form">
      <form onSubmit={formSubmitHandler}>
        <div className="controls">
          <div className="control">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={changeHandler}
            />
          </div>
          <div className="control">
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
          <div className="control">
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
        <div className="actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
