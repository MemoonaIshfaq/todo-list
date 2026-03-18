import React from 'react';

/**
 * About Component
 * Displays information about the React Todo List App
 */
function About() {
  return (
    <div className="about-container">
      <h1 className="main-heading">About This App</h1>

      <div className="about-content">
        <p>
          Welcome to the React Todo List App! This is a modern, elegant task
          management application built with React. Stay organized and track your
          daily tasks with ease.
        </p>

        <p>
          Whether you're managing personal projects, work tasks, or daily
          chores, this app provides a simple yet powerful interface to keep you
          on track.
        </p>

        <div className="about-features">
          <h3>Features</h3>
          <ul>
            <li>Create and manage your todo list</li>
            <li>Mark tasks as complete with visual feedback</li>
            <li>Filter tasks by status (All, Active, Completed)</li>
            <li>Delete tasks you no longer need</li>
            <li>View real-time statistics about your tasks</li>
            <li>Contact form for feedback and inquiries</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>

        <div className="about-features" style={{ marginTop: '1.5rem' }}>
          <h3>Technologies Used</h3>
          <ul>
            <li>React - Modern UI library</li>
            <li>React Router - Client-side navigation</li>
            <li>React Hooks (useState) - State management</li>
            <li>CSS3 - Custom styling and animations</li>
            <li>HTML5 - Semantic markup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
