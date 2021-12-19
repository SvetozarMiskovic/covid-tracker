import React from 'react';
import '../styles/CompareResults.css';

function CompareResults(props) {
  function convertAndSetString(info1, info2) {
    const confirmed = parseInt(info1.confirmed.replace(/\D/g, ''));
    const active = parseInt(info1.active.replace(/\D/g, ''));
    const deaths = parseInt(info1.deaths.replace(/\D/g, ''));

    const confirmed2 = parseInt(info2.confirmed.replace(/\D/g, ''));
    const active2 = parseInt(info2.active.replace(/\D/g, ''));
    const deaths2 = parseInt(info2.deaths.replace(/\D/g, ''));

    return `
    
      Currently, ${
        confirmed > confirmed2 ? info1.country : info2.country
      } has worse statistics as it has ${
      confirmed > confirmed2 ? confirmed - confirmed2 : confirmed2 - confirmed
    } more confirmed cases, ${
      active > active2 ? active - active2 : active2 - active
    } more active cases and ${
      deaths > deaths2 ? deaths - deaths2 : deaths2 - deaths
    } more deaths!
    
    `;
  }
  return (
    <div className="compare-results">
      <div className="compare-country-summary">
        <div className="first-country">
          <h4 className="first-country-name">Name: {props.info1.country}</h4>
          <p className="first-country-confirmed">
            Confirmed: {props.info1.confirmed}
          </p>
          <p className="first-country-active">Active: {props.info1.active}</p>
          <p className="first-country-deaths">Deaths: {props.info1.deaths}</p>
        </div>
        <div className="second-country">
          <h4 className="second-country-name">Name: {props.info2.country}</h4>
          <p className="second-country-confirmed">
            Confirmed: {props.info2.confirmed}
          </p>
          <p className="second-country-active">Active: {props.info2.active}</p>
          <p className="second-country-deaths">Deaths: {props.info2.deaths}</p>
        </div>
      </div>
      <div className="compare-conclusion">
        {convertAndSetString(props.info1, props.info2)}
      </div>
    </div>
  );
}

export default CompareResults;
