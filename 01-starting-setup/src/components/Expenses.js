import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
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
    </div>
  );
}

export default Expenses;