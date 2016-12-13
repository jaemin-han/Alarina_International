import React from 'react';
// import CompanyTemplate from '../CompanyTemplate/CompanyTemplate.jsx';
import './CompanyContainer.css';

const CompanyContainer = props => {

        <div id="position-main-container">
        <h1 id="company-name">{props.company_name}</h1>
        <h2 id="company-description">{props.company_description}</h2>
        <h2 id="company-industry">{props.industry}</h2>
        <h2 id="company-city">Head Quarter: {props.city}</h2>
        <h2 id="company-website">{props.website}</h2>

      </div>
// In attempts to pickup position data and company data when a user clicks on a specific position

}

export default CompanyContainer;
