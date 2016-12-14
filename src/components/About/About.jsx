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
          <h3>Hello Testing Testing Haha YES!</h3>
        </div>
      </div>
      );
  }

}
