import React from 'react';
import TodoItem from './TodoItem';

/**
 * TodoList Component
 * Presentational component that displays a list of todo items
 * Receives todos array and functions as props
 */
function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📝</div>
        <p>No tasks here. Create one to get started!</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={() => onToggleComplete(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
