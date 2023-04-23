import React from 'react';
import './Card.css';

function Card(props) {
  // combine CSS receieved from outside with original
  const classes = 'card '+ props.className;
  return <div className={classes}>{[props.children]}</div>;
}

export default Card;
