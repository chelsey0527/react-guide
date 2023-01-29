import "./ExpenseItem.css";

// component is just a combination fo HTML and JS function !
function ExpenseItem(props) {
  // keep hard logic outside to make code easier to read
  // Java Script handling date. More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  const month = props.date.toLocaleString('en-us',{month: 'long'});
  const day = props.date.toLocaleString('en-us',{day: '2-digit'});
  const year = props.date.getFullYear();


  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
