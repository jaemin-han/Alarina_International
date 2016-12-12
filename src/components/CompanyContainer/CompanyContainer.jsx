import React from 'react';
// import CompanyTemplate from '../CompanyTemplate/CompanyTemplate.jsx';
import './CompanyContainer.css';

const CompanyContainer = props => {
  const company = props.state.companyinfo.map((company) => {
    return (
      <CompanyTemplate
        key={company.id.toString()}
        company_name={company.company_name}
        company_description={company.company_description}
        industry={company.industry}
        city={company.city}
        website={company.website}
        date_created={company.date_created}
      />
    );
  });

  return (
    <div id="company-job">
      {company}
    </div>
  );
};

export default CompanyContainer;
