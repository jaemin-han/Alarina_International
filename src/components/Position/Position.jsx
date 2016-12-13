import React from 'react';
import CompanyContainer from '../CompanyContainer/CompanyContainer.jsx';
import '../normalize.css';
import './Position.css';

const Position = props => (
  <div id="position-container">

    <h1>Position Detail</h1>
      <div id="position-main-container">
        <h1 id="company-name">{props.state.company.company_name}</h1>
        <h2 id="company-description">{props.state.company.company_description}</h2>
        <h2 id="company-industry">{props.state.company.industry}</h2>
        <h2 id="company-city">Head Quarter: {props.state.company.city}</h2>
        <h2 id="company-website">{props.state.company.website}</h2>
      </div>

  </div>
  );

export default Position;
