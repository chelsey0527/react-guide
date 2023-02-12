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

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {filteredExpenses.map( (expense, key) =>
          <ExpenseItem
            key={key}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />,
        )}
      </Card>
    </>
  );
}

export default Expenses;
