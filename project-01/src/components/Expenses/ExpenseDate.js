import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  // keep hard logic outside to make code easier to read
  // Java Script handling date. More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  const month = props.date.toLocaleString('en-us', {month: 'long'});
  const day = props.date.toLocaleString('en-us', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
