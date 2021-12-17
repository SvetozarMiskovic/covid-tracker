import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <h2>MultiApp</h2>
      <ul className="home-list">
        <li>
          <Link to="/multi-app">Home</Link>
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
