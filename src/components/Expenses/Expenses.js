import { useState } from "react";
import Card from "../UI/Card/Card";
import Filters from "./Filters/Filters";
import "./Expenses.scss";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setYear] = useState(2022);
  const selectYearHandler = (year) => {
    setYear(year);
    console.log(`Filtered year: ${year}`);
  };

  return (
    <div>
      <Card className="expenses">
        <Filters
          selectedYear={filteredYear}
          onYearSelected={selectYearHandler}
        />

        <ExpensesList filteredYear={filteredYear} expenses={props.expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
