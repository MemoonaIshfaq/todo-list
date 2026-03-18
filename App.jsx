import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import TodoContainer from './containers/TodoContainer';
import ContactContainer from './containers/ContactContainer';
import './App.css';

/**
 * App Component
 * Root component that manages routing and layout
 * Displays navigation and routes to different pages
 */
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <NavBar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/todos" element={<TodoContainer />} />
            <Route path="/contact" element={<ContactContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
