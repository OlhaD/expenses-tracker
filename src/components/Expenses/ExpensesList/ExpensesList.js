import ExpenseItem from "./ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.expenses.filter((expense) => {
    const year = expense.date.getFullYear().toString();
    return year === props.filteredYear.toString();
  });

  if (filteredExpenses.length === 0) {
    return <p>No expenses found</p>;
  }

  return (
    <div>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
