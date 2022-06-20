import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

function NewExpense(props) {
  const [editing, setEditing] = useState(false);

  function startEditingHandler() {
    setEditing(true);
  }
  function stopEditingHandler() {
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
        {editing===false && <button onClick={startEditingHandler}>Start</button>}
        {editing===true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  );
}
export default NewExpense;
