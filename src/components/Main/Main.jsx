import React, { Component } from 'react';
import '../normalize.css';
import './Main.css';

export default class CompanyModal extends Component {
  render(){
    return(
      <div id="main-container">
        <form action="" id="main-form">

        <h1 id="main-h1"> Job Page!!! </h1>
          <input type="text" name="positions" placeholder="Search for a Position" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

