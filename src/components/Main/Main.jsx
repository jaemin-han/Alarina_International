import React, { Component } from 'react';
import PositionContainer from '../PositionContainer/PositionContainer.jsx';
import '../normalize.css';
import './Main.css';

    // <input
    // type="text"
    // name="positions"
    // placeholder="Search for a Position"
    // value={this.props.searchTerm}
    // onChange={this.props.handleUpdateSearch}
    // />

    // <button onClick={this.props.handleSubmitSearch}> Submit </button>

const Main = props => (
  <div id="main-container">
    <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet" />
    <h1 id="main-h1"> Say "YES" to Sponsorship - Find Your Dream Job </h1>

    {/*This is a placeholder which original plan was to render position based on user's query*/}
    <div id="input">
        <input id="search-input" type="text" placeholder="Type to Filter Position" />
        <input id="search-submit" type="submit" />
    </div>


    <PositionContainer jobs={props.state.jobs} getCompany={props.state.getCompany} />

  </div>
);

export default Main;
