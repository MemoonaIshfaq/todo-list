import React from 'react';

/**
 * TodoItem Component
 * Presentational component that displays a single todo item
 * Shows checkbox for completion status and delete button
 */
function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={onToggleComplete}
        aria-label={`Mark "${todo.title}" as ${
          todo.completed ? 'incomplete' : 'complete'
        }`}
      />
      <span className="todo-text">{todo.title}</span>
      <button
        className="todo-delete-btn"
        onClick={onDelete}
        aria-label={`Delete "${todo.title}"`}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
