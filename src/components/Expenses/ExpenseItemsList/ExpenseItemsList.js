import { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Filters from "../Filters/Filters";
import "./ExpenseItemsList.scss";

const ExpenseItemsList = () => {
  const expenses = [
    {
      id: 1,
      date: new Date(),
      title: "Title",
      price: 235,
    },
    {
      id: 2,
      date: new Date(),
      title: "Title 2",
      price: 33,
    },
    {
      id: 3,
      date: new Date(),
      title: "Title 3",
      price: 55,
    },
  ];

  const [filteredYear, setYear] = useState(2022);
  const selectYearHandler = (year) => {
    setYear(year);
    console.log(`Filtered year: ${year}`);
  };

  return (
    <div>
      <Filters selectedYear={filteredYear} onYearSelected={selectYearHandler} />
      <Card className="expenseItemsList">
        <ExpenseItem
          date={expenses[0].date}
          title={expenses[0].title}
          price={expenses[0].price}
        />
        <ExpenseItem
          date={expenses[1].date}
          title={expenses[1].title}
          price={expenses[1].price}
        />
        <ExpenseItem
          date={expenses[2].date}
          title={expenses[2].title}
          price={expenses[2].price}
        />
      </Card>
    </div>
  );
};

export default ExpenseItemsList;
