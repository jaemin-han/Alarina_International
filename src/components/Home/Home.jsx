import React, { Component } from 'react';
import { Link } from 'react-router'
import '../normalize.css';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id="home-container">
      {/*Google Font here*/}
        <h1>Sed cursus ante dapibus diam. </h1>
        <h2>rabitur sodales ligula in libero. Sed dignissim lacinia nunc.</h2>

        <div className="search-button">
          <button><Link to='/main'>Search Now</Link></button>
        </div>

      </div>
    );
  }
}
