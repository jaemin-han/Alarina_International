import React from 'react';
import PositionTemplate from '../PositionTemplate/PositionTemplate.jsx';
import './PositionContainer.css';

const PositionContainer = props => {
  const positions = props.state.jobs.map((job) => {
    return (
      <PositionTemplate
        key={job.id.toString()}
        position={job.position}
        // description={job.description}
        company={job.job_company}
        city={job.city}
        // company_id={job.company_id}
        // date_created={job.date_created}
      />

    );
  // Attempts to create a button that would link to company page with position info.
  {/*<Link id="home-link" to="/position">Apply Now</Link>*/}
  });

  return (
    <div id="position-container">
      {positions}
    </div>
  );
};

export default PositionContainer;
