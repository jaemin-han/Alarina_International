import React, { Component } from 'react';
import { Link } from 'react-router'
import '../normalize.css';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id="home-container">
      {/*Google Font here*/}

        <h1 id="home-h1">Sed cursus ante dapibus diam. </h1>

        <h2 id="home-h2">rabitur sodales ligula in libero. Sed dignissim lacinia nunc.</h2>

        <button id="home-button"><Link id="home-link" to='/main'>Search Now</Link></button>

      </div>
    );
  }
}
