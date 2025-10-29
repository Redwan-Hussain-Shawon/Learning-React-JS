import { useState, useEffect } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpense] = useState(() => {
    const saved = localStorage.getItem('expenses')
    return saved ? JSON.parse(saved):[]
  });

  const addExpense = (expense) => {
    setExpense((prev) => [...prev,expense]);
  }


  useEffect(() => {
    localStorage.setItem('expenses',JSON.stringify(expenses ))
  },[expenses])

  const deleteExpense = (id) => {
   
    setExpense(expenses.filter((item) => {
      return item.id != id
    }))
  }

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);


  
  return (
    <div class="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <h3 class="total">Total Expense: ₹{totalExpenses}</h3>
    </div>
  );
}

export default App;
