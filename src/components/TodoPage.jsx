import React, { useState, useEffect } from 'react';
import '../styles/TodoPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const saveTodos = (updatedTodos) => {
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const addTodo = () => {
    if (!title.trim() || !date.trim()) {
      toast.error('Title and date are required');
      return;
    }
    const newTodo = { title, description, date, completed: false };
    saveTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
    setDate('');
    toast.success('Todo added successfully');
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    saveTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    saveTodos(updatedTodos);
    toast.info('Todo removed');
  };

  return (
    <div className="todo-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="todo-header">
        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className={`todo-card ${todo.completed ? 'completed' : ''}`}>
            <h3 onClick={() => setSelectedTodo(todo)}>{todo.title}</h3>
            <p>{todo.date}</p>
            <div className="todo-actions">
              <button onClick={() => toggleComplete(index)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {selectedTodo && (
        <div className="modal-overlay" onClick={() => setSelectedTodo(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedTodo.title}</h2>
            <p>{selectedTodo.description || 'No description available'}</p>
            <p>{selectedTodo.date}</p>
            <button onClick={() => setSelectedTodo(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoPage;
