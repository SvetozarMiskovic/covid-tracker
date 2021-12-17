import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <h2>
        <span>Multi</span>App
      </h2>
      <ul className="home-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="multi-app/covid-tracker">COVID Tracker</Link>
        </li>
        <li>
          <Link to="multi-app/todo-app">Todo App</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
