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

    <h1 id="main-h1"> - Find Your Perfect Job - </h1>

    <PositionContainer state={props.state} />

  </div>
);

export default Main;
