import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: "toilet paper", amount: 94.12, date: new Date(2021, 3, 6) },
    { title: "car Insurance", amount: 294.67, date: new Date(2021, 4, 29) },
    { title: "banana", amount: 100.23, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
