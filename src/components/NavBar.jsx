import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * NavBar Component
 * Presentational component that displays navigation links
 * Highlights the active route
 */
function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          React Todo App
        </Link>
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/todos"
              className={`navbar-link ${isActive('/todos') ? 'active' : ''}`}
            >
              Todos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`navbar-link ${
                isActive('/contact') ? 'active' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
