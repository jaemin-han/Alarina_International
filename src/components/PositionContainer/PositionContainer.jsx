import React from 'react';
import PositionTemplate from '../PositionTemplate/PositionTemplate.jsx';
import './PositionContainer.css';

const PositionContainer = props => {
  const positions = props.state.jobs.map((job) => {
    return (
      <PositionTemplate
        key={job.id.toString()}
        position={job.position}
        description={job.description}
        company_id={job.company_id}
        date_created={job.date_created}
      />
    );
  });

  return (
    <div id="position-container">
      {positions}
    </div>
  );
};

export default PositionContainer;
