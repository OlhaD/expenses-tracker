import { useState } from "react";
import Card from "../UI/Card/Card";
import Filters from "./Filters/Filters";
import "./Expenses.scss";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = (props) => {
  const currentDate = new Date();
  const [filteredYear, setYear] = useState(currentDate.getFullYear());
  const [filteredMonth, setMonth] = useState(currentDate.getMonth());
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const selectYearHandler = (year) => {
    setYear(year, () => setFilteredExpenses(getFilteredExpenses()));
  };

  const selectMonthHandler = (month) => {
    // setMonth(month, () => {
    //   const expenses = getFilteredExpenses();
    //   setFilteredExpenses(expenses);
    // });
    setMonth((prevMonth) => {
      console.log(filteredMonth); // "React is awesome!"
      
      const expenses = getFilteredExpenses();
      setFilteredExpenses(expenses);

      return filteredMonth;
    });
  };

  function getFilteredExpenses() {
    return props.expenses.filter(
      (expense) =>
        expense.date.getFullYear() === filteredYear &&
        expense.date.getMonth() === filteredMonth
    );
  }

  return (
    <div>
      <Card className="expenses">
        <Filters
          selectedYear={filteredYear}
          onYearSelected={selectYearHandler}
          selectedMonth={filteredMonth}
          onMonthSelected={selectMonthHandler}
          expenses={props.expenses}
        />

        <ExpensesList
          filteredYear={filteredYear}
          filteredMonth={filteredMonth}
          expenses={filteredExpenses}
        />
      </Card>
    </div>
  );
};

export default Expenses;
