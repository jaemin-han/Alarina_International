import React, { Component } from 'react';
import { Link } from 'react-router';
import '../normalize.css';
import './Home.css';

const Home = props => (

  <div id="home-container">

  {/*Google Font here*/}


    {/*http://stackoverflow.com/questions/36230522/adding-a-background-video-with-react*/}
    {/*This video was downloaded from YouTube: https://www.youtube.com/watch?v=TiZJfY9K1kI*/}
    {/*<video id="background-video" loop autoPlay>*/}
        {/*<source src="./kpmg_video.mp4" type="video/mp4" />*/}
        {/*<source src="./kpmg_video".mp4" type="video/ogg" />*/}
    {/*</video>*/}

    <h1 id="home-h1">We Believe in <span id="span-box">People's</span> Individual <span id="span-box">Potential.</span></h1>

    <h2 id="home-h2">Let Your Next <span id="h2-box">Candidate</span> Make the Difference.</h2>

    <h3 id="home-h3">Alarina identifies specific job openings for which companies will sponsor employment visas.</h3>
      {/*We value the diversity of our employees and the unique perspectives they bring to Alarina.*/}
    <div id="explore-button">
      <Link id="home-link" to="/main">[ Explore Today ]</Link>
    </div>


  </div>




  );

export default Home;
