import React from 'react';
// import CompanyTemplate from '../CompanyTemplate/CompanyTemplate.jsx';
// import PositionTemplate from '../PositionTemplate/PositionTemplate.jsx';
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
        {/*date_created={company.date_created}*/}
      />

      // In attempts to pickup position data and company data when a user clicks on a specific position
      <PositionTemplate
        key={job.id.toString()}
        position={job.position}
        description={job.description}
        company={job.job_company}
        city={job.city}
        date_created={job.date_created}
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
