import classes from './ExpenseDate.module.scss';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className={classes.expenseDate}>
      <div className={classes.month}>{month}</div>
      <div className={classes.year}>{year}</div>
      <div className={classes.day}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
