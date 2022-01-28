import "./App.scss";
import ExpenseItemsList from "./components/Expenses/ExpenseItemsList/ExpenseItemsList";
import Layout from "./components/UI/Layout/Layout";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <ExpenseItemsList />
      </Layout>
    </div>
  );
};

export default App;
