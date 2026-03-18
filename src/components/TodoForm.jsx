import React, { useState } from 'react';

/**
 * TodoForm Component
 * Presentational component that provides a form to add new todos
 * Manages its own local state for the input field
 */
function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input is not empty or only whitespace
    if (inputValue.trim() === '') {
      alert('Please enter a task');
      return;
    }

    // Call parent function to add todo
    onAddTodo(inputValue);

    // Clear input field
    setInputValue('');
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="form-group">
        <label htmlFor="todo-input" className="form-label">
          Add New Task
        </label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            id="todo-input"
            type="text"
            className="form-input"
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={handleInputChange}
            aria-label="New task input"
          />
          <button type="submit" className="submit-btn" style={{ flexShrink: 0 }}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
