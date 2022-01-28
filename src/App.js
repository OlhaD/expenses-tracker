import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";
import Layout from "./components/UI/Layout/Layout";

const App = () => {
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

  return (
    <div className="App">
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
