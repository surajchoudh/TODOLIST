import React, { useState } from 'react';
import './index.css'


const App = () => {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random().toString(),
      taskName,
      description,
      status
    };
    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
    setStatus('not completed');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1><u>TODO-APP</u></h1><br></br><br></br>
      
      <label>Enter the Task:--</label>
       <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      /><br></br><br></br><br></br>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="not completed">Not Completed</option>
        <option value="completed">Completed</option>
      </select><br></br><br></br><br></br>
      <button onClick={handleAddTodo}>Add Todo</button>

      <div className="todos-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3>{todo.taskName}</h3>
            <p>{todo.description}</p>
            <select
              value={todo.status}
              onChange={(e) => handleStatusChange(todo.id, e.target.value)}
            >
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
