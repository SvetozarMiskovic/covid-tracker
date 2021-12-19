import React, { useState } from 'react';
import CompareInputs from './CompareInputs';
import '../styles/Compare.css';
import CompareResults from './CompareResults';
function Compare(props) {
  const [showCompareOne, setCompareOne] = useState(false);
  const [showCompareTwo, setCompareTwo] = useState(false);
  const [info1, setInfo1] = useState({});
  const [info2, setInfo2] = useState({});
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  function setInput1Handler(value) {
    setInput1(value.toLowerCase());
  }

  function setInput2Handler(value) {
    setInput2(value.toLowerCase());
  }

  function getDataHandler1(inputText) {
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
            setInfo1({
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

  function getDataHandler2(inputText) {
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
            setInfo2({
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
    <div className="compare-holder">
      <CompareInputs
        showCompareOne={showCompareOne}
        showCompareTwo={showCompareTwo}
        setCompareOne={setCompareOne}
        setCompareTwo={setCompareTwo}
        setInput1={setInput1Handler}
        setInput2={setInput2Handler}
        getCountriesOnStart={props.getCountriesOnStart}
        sugCountries={props.sugCountries}
        searchText={props.searchText}
        getData1={getDataHandler1}
        getData2={getDataHandler2}
        input1={input1}
        input2={input2}
        info1={info1}
        info2={info2}
      />
      <CompareResults
        info1={info1}
        info2={info2}
        setInfo1={setInfo1}
        setInfo2={setInfo2}
      />
    </div>
  );
}

export default Compare;
