import React, {useState} from 'react';
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  // eslint-disable-next-line no-unused-vars
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map( (expense) => <ExpenseItem key={expense} title={expense.title} amount={expense.amount} date={expense.date}/>)}
      </Card>
    </>
  );
}

export default Expenses;
