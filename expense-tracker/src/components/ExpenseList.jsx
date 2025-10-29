import { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
    if (expenses.length == 0) {
      return <p className="no-expense">No Expenses Yet</p>
  }
  return (
    <div class="expense-list">
      {expenses?.map((item) => (
        <ExpenseItem key={item.id} item={item} onDelete={deleteExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
