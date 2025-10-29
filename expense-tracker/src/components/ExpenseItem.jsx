import { useState, useEffect } from "react";

const ExpenseItem = ({ item,onDelete }) => {
  return (
    <div class="expense-item">
      <span>{item.title} </span>
      <span>${item.amount}</span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </div>
  );
};

export default ExpenseItem;
