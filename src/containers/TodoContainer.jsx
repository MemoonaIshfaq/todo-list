import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import FilterButtons from '../components/FilterButtons';
import TodoStats from '../components/TodoStats';

/**
 * TodoContainer Component
 * Smart/Container component that manages todo state and logic
 * Handles adding, removing, toggling completion, and filtering todos
 */
function TodoContainer() {
  // State for todos array
  const [todos, setTodos] = useState([
    { id: 1, title: 'Go to the grocery', completed: false, createdAt: Date.now() },
    { id: 2, title: 'Work on project', completed: false, createdAt: Date.now() },
    { id: 3, title: 'Study programming', completed: true, createdAt: Date.now() }
  ]);

  // State for filter
  const [filter, setFilter] = useState('ALL');

  // Generate unique ID for new todos
  const getNextId = () => {
    return Math.max(...todos.map((todo) => todo.id), 0) + 1;
  };

  // Add a new todo
  const handleAddTodo = (title) => {
    const newTodo = {
      id: getNextId(),
      title: title,
      completed: false,
      createdAt: Date.now()
    };
    setTodos([...todos, newTodo]);
  };

  // Delete a todo by id
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle todo completion status
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      case 'ALL':
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div>
      <h1 className="main-heading">My Tasks</h1>

      <div className="todos-section">
        {/* Display stats */}
        <TodoStats todos={todos} />

        {/* Display form to add new todo */}
        <TodoForm onAddTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default TodoContainer;
