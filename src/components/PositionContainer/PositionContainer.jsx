import React from 'react';
// import PositionTemplate from '../PositionTemplate/PositionTemplate.jsx';
import './PositionContainer.css';

const PositionContainer = props => {
  const positions = props.positions.map((position) => {
    return (
      <PositionTemplate
        key={position.id.toString()}
        id={position.id}
        position={position.position}
        description={position.description}
        company_id={position.company_id}
        date_created={position.date_created}
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
