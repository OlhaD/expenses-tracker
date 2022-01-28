import Card from "../../UI/Card/Card";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <Card className="ExpenseItem">
      <ExpenseDate date={props.date} />
      <div className="ExpenseItem__description">
        <h2>{props.title}</h2>
        <div className="ExpenseItem__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
