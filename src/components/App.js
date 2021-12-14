import React, { useState } from 'react';
import '../styles/App.css';
import Form from './Form';
import Information from './Information';
function App() {
  const [inputText, setInput] = useState('');
  const [info, setInfo] = useState({
    country: 'Please specify a country!',
    confirmed: 0,
    active: 0,
    deaths: 0,
  });
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

  return (
    <div className="App">
      <Form
        getData={getDataHandler}
        inputText={inputText}
        setInputText={setInputHandler}
      />
      <Information info={info} />
    </div>
  );
}

export default App;
