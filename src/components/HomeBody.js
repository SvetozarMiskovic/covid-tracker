import React from 'react';
import '../styles/HomeBody.css';

function HomeBody() {
  return (
    <div className="home-body">
      <h2>
        Welcome to <span>Multi</span>App
      </h2>
      <h4>
        MultiApp consists of COVID Tracker, which can be used to look up the
        current numbers of cases in any country you want, and of Todo App which
        allows you to write down your daily tasks to keep track of everything at
        one place!
      </h4>
    </div>
  );
}

export default HomeBody;
