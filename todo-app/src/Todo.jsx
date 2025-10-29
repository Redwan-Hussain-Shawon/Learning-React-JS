import { useState } from 'react'


const Todo = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todo, setTodo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo){
            setTodo([
              ...todo,
              {
                text: newTodo,
                completed: false,
              },
            ]);
          setNewTodo('')
        } else {
             alert("enter a value");
        }
    }
    const handeDelete = (index)=> {
      const newTodos = [...todo]; 
      newTodos[index].completed = !newTodos[index].completed;
      setTodo(newTodos);
      console.log(todo)
    }
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add New Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            <span style={{textDecoration:item.completed?'line-through':'none'}}> {item.text}</span>
            <button onClick={() => handeDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo