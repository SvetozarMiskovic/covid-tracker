import React from 'react';

import '../styles/CompareInputs.css';
function CompareInputs(props) {
  return (
    <div className="compare-inputs">
      <h4 className="compare-input-title">
        Please choose two countries to compare!
      </h4>
      <div className="compare-box-1">
        <input
          autoComplete="off"
          id="compare-input-1"
          type="text"
          placeholder="Enter first country"
          onInput={e => {
            const value = e.target.value;
            props.searchText(value);
            props.setCompareOne(true);
          }}
          onClick={() => {
            props.getCountriesOnStart();
            props.setCompareOne(true);
          }}
          onChange={e => {
            const value = e.target.value;
            props.setInput1(value);
          }}
        ></input>
        {props.showCompareOne && props.sugCountries.length > 0 ? (
          <div
            onMouseLeave={() => {
              props.setCompareOne(false);
            }}
            className="suggestion-box-1"
          >
            <ul className="compare-search-result-1">
              {props.sugCountries.map(country => {
                return (
                  <div
                    key={country.Country}
                    onClick={e => {
                      const value = e.target.textContent;
                      props.setInput1(value);
                      document.querySelector('#compare-input-1').value = value;
                      props.setCompareOne(false);
                    }}
                  >
                    {country.Country}
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="compare-box-2">
        <input
          autoComplete="off"
          id="compare-input-2"
          type="text"
          placeholder="Enter second country"
          onInput={e => {
            const value = e.target.value;
            props.searchText(value);
            props.setCompareTwo(true);
          }}
          onClick={() => {
            props.setCompareTwo(true);
          }}
          onChange={e => {
            const value = e.target.value;
            props.setInput2(value);
          }}
          onClick={() => {
            props.getCountriesOnStart();
            props.setCompareTwo(true);
          }}
        ></input>
        {props.showCompareTwo && props.sugCountries.length > 0 ? (
          <div
            onMouseLeave={() => {
              props.setCompareTwo(false);
            }}
            className="suggestion-box-2"
          >
            <ul className="compare-search-result-2">
              {props.sugCountries.map(country => {
                return (
                  <div
                    key={country.Country}
                    onClick={e => {
                      const value = e.target.textContent;
                      props.setInput2(value);
                      document.querySelector('#compare-input-2').value = value;
                      props.setCompareTwo(false);
                    }}
                  >
                    {country.Country}
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <button
        className="compare-btn"
        type="click"
        onClick={() => {
          props.getData1(props.input1);
          props.getData2(props.input2);
          props.setInput1('');
          props.setInput2('');
          document.querySelector('#compare-input-1').value = '';
          document.querySelector('#compare-input-2').value = '';
          props.setCompareOne(false);
          props.setCompareTwo(false);
        }}
      >
        <i className="fas fa-check"></i>
      </button>
    </div>
  );
}

export default CompareInputs;
