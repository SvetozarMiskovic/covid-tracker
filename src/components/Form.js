import React from 'react';
import '../styles/Form.css';
function Form(props) {
  return (
    <div id="input">
      <form autoComplete="off">
        <label htmlFor="country">
          Please write the country you want stats for!
        </label>
        <input
          className="text-field"
          onInput={e => {
            const value = e.target.value;
            props.searchText(value);
            props.setOpen(true);
          }}
          type="text"
          id="country"
          placeholder="i.e. Serbia, India, Russia..."
          required
          onChange={e => {
            const value = e.target.value;

            props.setInputText(value);
          }}
          onClick={() => {
            props.getCountriesOnStart();
            props.setOpen(true);
          }}
        ></input>
        {props.open && props.sugCountries.length > 0 ? (
          <div
            className="results"
            onMouseLeave={() => {
              props.setOpen(false);
            }}
          >
            <ul className="result-list">
              {props.sugCountries.map(country => {
                return (
                  <div
                    key={country.Country}
                    onClick={e => {
                      const value = e.target.textContent;
                      props.setInputText(value);
                      document.querySelector('input[type="text"]').value =
                        value;
                      props.setOpen(false);
                    }}
                  >
                    {country.Country}
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null}

        <input
          type="submit"
          value="Get Data!"
          onClick={e => {
            e.preventDefault();

            props.getData(props.inputText);
            props.setInputText('');
            document.querySelector('input[type="text"]').value = '';
            props.setOpen(false);
          }}
          className="submit-input"
        ></input>
      </form>
    </div>
  );
}

export default Form;
