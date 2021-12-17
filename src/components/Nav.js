import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <h2>MultiApp</h2>
      <ul className="home-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/covid-tracker">COVID Tracker</Link>
        </li>
        <li>
          <Link to="/todo-app">Todo App</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
