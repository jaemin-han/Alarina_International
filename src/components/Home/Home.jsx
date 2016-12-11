import React, { Component } from 'react';
import { Link } from 'react-router';
import '../normalize.css';
import './Home.css';

const Home = props => (

      <div id="home-container">
      <div></div>
      {/*Google Font here*/}

        <h1 id="home-h1">Sed cursus ante dapibus diam. </h1>

        <h2 id="home-h2">rabitur sodales ligula in libero. Sed dignissim lacinia nunc.</h2>

        <Link id="home-link" to="/main">Search Now</Link>

      </div>

  );

export default Home;
