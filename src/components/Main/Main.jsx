import React, { Component } from 'react';
import PositionContainer from '../PositionContainer/PositionContainer.jsx';
import '../normalize.css';
import './Main.css';

const Main = props => (
  <div id="main-container">

    <h1 id="main-h1"> Job Page!!! </h1>
    <input type="text" name="positions" placeholder="Search for a Position" />
    <input type="submit" value="Submit" />

    <PositionContainer state={props.state} />

  </div>
);

export default Main;
