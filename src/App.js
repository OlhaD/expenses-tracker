import "./App.scss";
import ExpenseItemsList from "./components/Expenses/ExpenseItemsList/ExpenseItemsList";
import NewExpense from "./components/NewExpense/NewExpense";
import Layout from "./components/UI/Layout/Layout";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <NewExpense />
        <ExpenseItemsList />
      </Layout>
    </div>
  );
};

export default App;
