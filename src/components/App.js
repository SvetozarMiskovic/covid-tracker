import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../styles/App.css';
import TodoApp from './react_todo_main/src/components/TodoApp';
import Form from './Form';
import Home from './Home';
import Information from './Information';
import HomeBody from './HomeBody';

function App() {
  const [inputText, setInput] = useState('');
  const [info, setInfo] = useState({
    country: 'Please specify a country!',
    confirmed: 0,
    active: 0,
    deaths: 0,
  });
  const [sugCountries, setSugCountries] = useState([]);
  const [open, setOpen] = useState(false);

  function getCountriesOnStart() {
    fetch('https://api.covid19api.com/countries')
      .then(res => res.json())
      .then(data => {
        const sugData = data.slice(25, 33);
        setSugCountries([...sugData]);
      });
  }

  function setInputHandler(value) {
    setInput(value.toLowerCase());
  }
  function getDataHandler(inputText) {
    let data;
    const input = inputText;
    const url = 'https://api.covid19api.com/total/dayone/country/' + input;
    if (input) {
      fetch(url)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(res => {
          data = res[res.length - 1];

          if (data) {
            setInfo({
              country: data.Country,
              confirmed: data.Confirmed.toLocaleString(),
              active: data.Active.toLocaleString(),
              deaths: data.Deaths.toLocaleString(),
            });
          }
        })
        .catch(error => {
          console.log(error);
          alert('Please enter a valid country!');
        });
    }
  }
  function searchTexthandler(value) {
    fetch('https://api.covid19api.com/countries')
      .then(res => res.json())
      .then(data => {
        let filtered = data.filter(d => {
          if (!value) {
            let filtered = [];
          } else {
            const regex = new RegExp(`^${value}`, 'gi');

            return d.Country.match(regex);
          }
        });
        setSugCountries([...filtered]);
      });
  }
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<HomeBody />} />

        <Route
          path="multi-app/covid-tracker"
          element={[
            <Form
              key={'covidTracker'}
              getData={getDataHandler}
              inputText={inputText}
              setInputText={setInputHandler}
              sugCountries={sugCountries}
              getCountriesOnStart={getCountriesOnStart}
              open={open}
              setOpen={setOpen}
              searchText={searchTexthandler}
            />,
            <Information key={'covidTracker2'} setOpen={setOpen} info={info} />,
          ]}
        />
        <Route path="multi-app/todo-app" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
