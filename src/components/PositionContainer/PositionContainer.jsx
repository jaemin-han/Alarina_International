import React from 'react';
import PositionTemplate from '../PositionTemplate/PositionTemplate.jsx';
import { Link } from 'react-router';
import './PositionContainer.css';

const PositionContainer = props => {

  const positions = props.state.jobs.map((job) => {
    return (
      <div id="position-main-container">
        <PositionTemplate
          key={job.id.toString()}
          position={job.position}
          // description={job.description}
          company={job.job_company}
          city={job.city}
          // company_id={job.company_id}
          // date_created={job.date_created}
        />
        <Link id="position-link" to="/position">Apply Now</Link>
      </div>

    );
  });

  return (
    <div id="position-container">
      {positions}
    </div>
  );
};

export default PositionContainer;
