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

        {/* We can use props, but we don't HAVE TO */}
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        >
        </ExpenseItem>
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        ></ExpenseItem>
      </Card>
    </>
  );
}

export default Expenses;
