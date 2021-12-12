import React, { useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Information from './Information';
function App() {
  const [inputText, setInput] = useState('');

  function setInputHandler(value) {
    setInput(value.toLowerCase());
  }
  function getDataHandler(inputText, country, deaths, active, confirmed) {
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
          console.log(data);
          if (data) {
            country.textContent = data.Country;
            deaths.textContent = data.Deaths.toLocaleString();
            active.textContent = data.Active.toLocaleString();
            confirmed.textContent = data.Confirmed.toLocaleString();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  return (
    <div className="App">
      <Form
        getData={getDataHandler}
        inputText={inputText}
        setInputText={setInputHandler}
      />
      <Information />
    </div>
  );
}

export default App;
