import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    function startEditingHandler(){
        setIsEditing(true);
    }
    function stopEditingHandler() {
        setIsEditing(false);
      }
    
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    return(
        <div className = 'new-expense'>
            {isEditing===false && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing===true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}onCancel={stopEditingHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;