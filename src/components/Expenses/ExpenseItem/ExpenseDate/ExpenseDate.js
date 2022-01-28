import './ExpenseDate.scss';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className='ExpenseDate'>
      <div className='ExpenseDate__month'>{month}</div>
      <div className='ExpenseDate__year'>{year}</div>
      <div className='ExpenseDate__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
