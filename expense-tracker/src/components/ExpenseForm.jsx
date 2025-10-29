import { useState, useEffect, useRef } from "react";

const ExpenseForm = ({ onAddExpense }) => {
    const [input, setInput] = useState({
        text: '',
        number:''
    })

    const titleRef = useRef()
    const amountRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.text || !input.number) alert('Please fill fields!')
        
        const newExpense = {
          id: Date.now(),
          title: input.text,
          amount: parseFloat(input.number),
        };
        onAddExpense(newExpense);
        setInput({
          text: "",
          number: "",
        });
        titleRef.current.focus()
    }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        placeholder="Expense Title"
        type="text"
        value={input.text}
              onChange={(e) => setInput({ ...input, text: e.target.value })}
              ref={titleRef}
      />
      <input
        placeholder="Amount ₹"
        type="number"
        value={input.number}
        onChange={(e) => setInput({ ...input, number: e.target.value })}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
