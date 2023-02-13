import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>Found not expenses.</h2>;
  }

  return <ul className='expenses-list'>
    {props.item.map((expense, key)=>(
      <ExpenseItem
        key={key}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))};
  </ul>;
};

export default ExpensesList;
