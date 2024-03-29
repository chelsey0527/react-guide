import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// component is just a combination fo HTML and JS function !
function ExpenseItem(props) {
  // must be called directly inside the component function, also not in any further functions.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated!');
    console.log('new:' + title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change the Title</button>
    </Card>
  );
}

export default ExpenseItem;
