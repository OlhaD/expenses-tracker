import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Layout from "./components/UI/Layout/Layout";

const INITIAL_EXPENSES = [
  {
    id: 1,
    date: new Date(),
    title: "Title",
    amount: 235,
  },
  {
    id: 2,
    date: new Date(),
    title: "Title 2",
    amount: 33,
  },
  {
    id: 3,
    date: new Date(),
    title: "Title 3",
    amount: 55,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const expenseAddedHandler = (expense) => {
    expense.date = new Date(expense.date);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Layout>
      <NewExpense onExpenseAdded={expenseAddedHandler} />
      <Expenses expenses={expenses} />
    </Layout>
  );
};

export default App;
