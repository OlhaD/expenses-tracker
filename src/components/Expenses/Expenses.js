import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Filters from "./Filters/Filters";
import classes from "./Expenses.module.scss";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = (props) => {
  const currentDate = new Date();
  const [filteredYear, setYear] = useState(currentDate.getFullYear());
  const [filteredMonth, setMonth] = useState(currentDate.getMonth());
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  React.useEffect(() => {
    setFilteredExpenses(props.expenses);
  }, [props.expenses]);

  const selectYearHandler = (year) => {
    setYear(year);
    const expenses = getFilteredExpenses(year, filteredMonth);
    setFilteredExpenses(expenses);
  };

  const selectMonthHandler = (month) => {
    setMonth(month);
    const expenses = getFilteredExpenses(filteredYear, month);
    setFilteredExpenses(expenses);
  };

  function getFilteredExpenses(year, month) {
    return props.expenses.filter(
      (expense) =>
        expense.date.getFullYear() === year &&
        expense.date.getMonth() === month
    );
  }

  return (
    <div>
      <Card className={classes.expenses}>
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
