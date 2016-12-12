import React, { Component } from 'react';
// import CompanyContainer from '../CompanyContainer/CompanyContainer.jsx';
import '../normalize.css';
import './Position.css';

const Position = props => (
  <div id="position-container">

    <h1>Position Detail</h1>

    <CompanyContainer state={props.state} />

  </div>
  );

export default Position;
