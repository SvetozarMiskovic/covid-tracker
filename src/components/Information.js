import React from 'react';
import '../styles/Information.css';
function Information(props) {
  return (
    <div className="holder">
      <h2 className="country-display">{props.info.country}</h2>
      <div className="information-box">
        <div className="confirmed">
          <h2>Number of confirmed cases</h2>
          <h4 className="confirmed-cases">{props.info.confirmed}</h4>
        </div>

        <div className="active">
          <h2>Number of active cases</h2>
          <h4 className="active-cases">{props.info.active}</h4>
        </div>
        <div className="death">
          <h2>Number of death cases</h2>
          <h4 className="death-cases">{props.info.deaths}</h4>
        </div>
      </div>
    </div>
  );
}

export default Information;
