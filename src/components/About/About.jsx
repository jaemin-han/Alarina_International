// import React from 'react';
import React, { Component } from 'react';
import '../normalize.css';
import './About.css';

export default class About extends Component {

  aboutModal() {
    openAboutModal = document.querySelector("#about-modal-container")

    if (openAboutModal.style.display = "block") {
      openAboutModal.style.display = "none"
    }
  }

  render() {
    return(
      // Div id containing 'Alarina' information
      <div id="about-modal-container">
      {/*Add Google Font Link Here*/}
        <h2 id="about-title"> - About Alarina -</h2>

        <div id="about-item">
          <h3>Alarina is a unique job seeking application that supports both companies and candidates in one place. We specifically focus and post job openings for which companies in the U.S. are willing to sponsor employment visas for recent International students.
          <br /><br />Our mission is to minimize the search time for our users while maintaining ongoing relationship with company partners. We will continue to thrive and try our best to give back to the community.
          <br /><br /> “Nobody can go back and start a new beginning, but anyone can start today and make a new ending.” ― Maria Robinson

          </h3>
        </div>

        <div id="about-icons">
          <div id="github"></div>
          <div id="jaemin"></div>
          <div id="linkedin"></div>
        </div>

        <p id="love">Made with &#9829; by Jaemin Han</p>
      </div>
      );
  }

}
