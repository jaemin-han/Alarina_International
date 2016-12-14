import React, { Component } from 'react';
import PositionTemplate from '../PositionTemplate/PositionTemplate.jsx';
import { Link } from 'react-router';
import './PositionContainer.css';


export default class PositionContainer extends Component {

  fetchCompany(e){
    e.preventDefault();
    this.props.getCompany(e.target.value);
  }

  render() {

    console.log(this);

    const PositionContainer = props => {

      const positions = props.jobs.map((job, i) => {
        return (
          <div key={i} id="position-main-container">
            <PositionTemplate
              // id={job.id}
              position={job.position}
              // description={job.description}
              company={job.job_company}
              city={job.city}
              // company_id={job.company_id}
              date_created={job.date_created}
            />

            <button id="position-container-button" onClick={this.fetchCompany.bind(this)} value={job.company_id}>Apply now</button>
          </div>
        );
      });

      return (
        <div id="position-container">
          {positions}
        </div>
      );
    };

    return PositionContainer(this.props);
  }
}
// export default PositionContainer;
