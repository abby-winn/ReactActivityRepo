import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

function NewExpense(props) {
  const [editing, setEditing] = useState(false);

  function startHandler() {
    setEditing(true);
  }
  function stopHandler() {
    setEditing(false);
  }

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  }

  return (
    <div className="new-expense">
        {editing===false && <button onClick={startHandler}>Start</button>}
        {editing===true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopHandler}></ExpenseForm>}
    </div>
  );
}
export default NewExpense;
