import React from 'react';
import '../styles/Form.css';
function Form(props) {
  return (
    <div id="input">
      <form>
        <label htmlFor="country">
          Please write the country you want stats for!
        </label>
        <input
          type="text"
          id="country"
          placeholder="i.e. Serbia, India, Russia..."
          required
          onChange={e => {
            const value = e.target.value;

            props.setInputText(value);
          }}
        ></input>
        <input
          type="submit"
          value="Get Data!"
          onClick={e => {
            e.preventDefault();
            const country = document.querySelector('.country-display');
            const deaths = document.querySelector('.death-cases');
            const active = document.querySelector('.active-cases');
            const confirmed = document.querySelector('.confirmed-cases');
            props.getData(props.inputText, country, deaths, active, confirmed);
          }}
        ></input>
      </form>
    </div>
  );
}

export default Form;
