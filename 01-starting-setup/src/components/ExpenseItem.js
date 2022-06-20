import React from 'react';
import Card from './Card.js';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
  function clickHandler(){
    console.log("Clicked!!!");
  }
    return(
        <Card className = 'expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
             
        <div className = 'expense-item__description'>
            <h2>{props.title}</h2>
            <div className = 'expense-item__price'>${props.amount}</div>
        </div>
        <button onClick = {clickHandler}>Change Title</button>
    </Card>

   );
}

export default ExpenseItem;