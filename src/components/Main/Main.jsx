import React, { Component } from 'react';
import PositionTemplate from '../PositionTemplate/PositionTemplate.jsx';
import '../normalize.css';
import './Main.css';

export default class CompanyModal extends Component {
  constructor(props) {
    super();

    this.getJobs = this.getJobs.bind(this);
    this.renderJobs = this.renderJobs.bind(this);
  }

  getJobs(){
    console.log('show all jobs');
    fetch('/job/allPositions')
    .then(r => r.json())
    .then((jobs) => {
      this.setState({
        jobs: jobs
      })
      console.log(this.state.jobs);
    })
    .catch(error => console.log(error));
    this.renderJobs();
  }

  renderJobs() {
    return this.state.jobs.map((job, i) =>
      <PositionTemplate
        key={i}
        title={job.title}
        description={job.description}
        company_id={job.company_id}
        date_created={job.date_created}
      />
    );
  }

  render(){
    return(
      <div id="main-container">
        <form action="" id="main-form">

        <h1 id="main-h1"> Job Page!!! </h1>
          <input type="text" name="positions" placeholder="Search for a Position" />
          <input type="submit" value="Submit" />
        </form>

        <div id="all-position">
          {this.renderJobs()}
        </div>
      </div>
    );
  }
}

