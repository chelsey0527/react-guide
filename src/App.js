import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  {title: 'toilet paper', amount: 94.12, date: new Date(2021, 3, 6)},
  {title: 'car Insurance', amount: 294.67, date: new Date(2021, 4, 29)},
  {title: 'banana', amount: 100.23, date: new Date(2021, 2, 28)},
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // add new array & pull out the existent array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
