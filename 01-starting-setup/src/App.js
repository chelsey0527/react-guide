import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "car Insurance", amount: 294.67, date: new Date(2021, 4, 29) },
    { title: "b", amount: 100.23, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;