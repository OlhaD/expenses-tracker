import Card from "../../../UI/Card/Card";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="description">
        <h2>{props.title}</h2>
        <div className="amount">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
