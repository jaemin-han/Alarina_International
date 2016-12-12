import React from 'react';
import '../normalize.css';
import './PositionTemplate.css';

const PositionTemplate = props => (
  <div className="position-template">
    {/*Google Font Paste Here*/}
    <h1 id="position-title">{props.position}</h1>
    <h2 id="position-description">{props.description}</h2>
    <h2 id="position-company">Company: {props.company}</h2>
    <h2 id="position-city">Location: {props.city}</h2>
    <h2 id="position-id">{props.company_id}</h2>
    <h2 id="position-date">{props.date_created}</h2>
  {/*<button id="position-button" onClick={}>Click to Apply</button>*/}
  </div>

);

export default PositionTemplate;

