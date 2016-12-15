import React from 'react';
import '../normalize.css';
import './CompanyTemplate.css';

const CompanyTemplate = props => (
  <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet" />
  <div className="company-template">
    <h1 id="company-name">{props.company_name}</h1>
    <h2 id="company-description">{props.company_description}</h2>
    <h2 id="company-industry">{props.industry}</h2>
    <h2 id="company-city">Head Quarter: {props.city}</h2>
    <h2 id="company-website">{props.website}</h2>
  </div>
);


export default CompanyTemplate;
