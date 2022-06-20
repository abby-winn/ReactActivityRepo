import React, {useState} from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from './Card.js';
import ExpensesFilter from "./NewExpense/ExpensesFilter"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020")
  const filteredExpenses = props.items.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear)
  }


  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onFilterChange={filterChangeHandler}>
      </ExpensesFilter>
        <ExpenseList items = {filteredExpenses}></ExpenseList>
        </Card>
  );

}
export default Expenses;
