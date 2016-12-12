import React from 'react';
import CompanyTemplate from '../CompanyTemplate/CompanyTemplate.jsx';
import './CompanyContainer.css';

const CompanyContainer = props => {
  const companies = props.state.companyinfo.map((company) => {
    return (
      <div id="position-main-container">
        <CompanyTemplate
          key={company.id.toString()}
          company_name={company.company_name}
          company_description={company.company_description}
          industry={company.industry}
          city={company.city}
          website={company.website}
        />
      </div>
// In attempts to pickup position data and company data when a user clicks on a specific position
    );
  });

  return (
    <div id="company-job">
      {companies}
    </div>
  );
};

export default CompanyContainer;
