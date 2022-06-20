import React, {useState} from 'react';
import './Expenses.css';
import Card from './Card.js';
import ExpenseFilter from "./newExpense/ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.items.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });
    function filterChangeHandler(selectedYear){
      setFilteredYear(selectedYear)

    };

    return(
        <Card className = "expenses">
        <ExpenseFilter selected = {filteredYear} onFilterChange = {filterChangeHandler}></ExpenseFilter>
        
      
        <ExpenseList items ={filteredExpenses}></ExpenseList>
     

 
  
      </Card>
    );
    
}

export default Expenses;