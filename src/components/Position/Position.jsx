import React from 'react';
// import CompanyContainer from '../CompanyContainer/CompanyContainer.jsx';
import '../normalize.css';
import './Position.css';

const Position = props => (
  <div id="position-container">
  <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet" />
    <div className="position-main-container-page">
      <h1 id="company-information">Company Information</h1><br />
      <h1 id="company-name">{props.state.company.company_name}</h1>
      <h2 id="company-description">{props.state.company.company_description}</h2>
      <h2 id="company-industry">Industry (Concentration): {props.state.company.industry}</h2>
      <h2 id="company-city">Head Quarter: {props.state.company.city}</h2> <br /><br /><br />
      <h2 id="company-website">{props.state.company.website}</h2>
    </div>

    <div className="position-main-container-page">
      <h1 id="job-title">Position Detail</h1><br /><br />
      <h2 id="job-position">{props.state.company.position}</h2>
      <h2 id="job-description">Job Description: {props.state.company.description}</h2>
      <h2 id="job-city">Office Location: {props.state.company.city}</h2>
      <h2 id="job-date">Date Created: {props.state.company.date_created}</h2>

      <div id="resume">
        <h1 id="resume-click">Click to Submit</h1>
      </div>
    </div>

  </div>
  );

export default Position;
