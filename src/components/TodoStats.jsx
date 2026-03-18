import React from 'react';

/**
 * TodoStats Component
 * Presentational component that displays statistics about todos
 * Shows total count and completed count
 */
function TodoStats({ todos }) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="stats-section">
      <div className="stat-item">
        <span className="stat-label">Total</span>
        <span className="stat-value">{totalTodos}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Active</span>
        <span className="stat-value">{activeTodos}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Completed</span>
        <span className="stat-value">{completedTodos}</span>
      </div>
    </div>
  );
}

export default TodoStats;
