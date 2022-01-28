import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div className="ExpenseItem__description">
        <h2>{props.title}</h2>
        <div className="ExpenseItem__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
