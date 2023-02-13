import React, {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  // eslint-disable-next-line no-unused-vars
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList item={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
