import "./ExpenseForm.scss";

const ExpenseForm = () => {
  return (
    <div className="expense-form">
      <form>
        <div className="controls">
          <div className="control">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" />
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
