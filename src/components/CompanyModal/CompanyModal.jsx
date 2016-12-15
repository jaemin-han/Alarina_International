// import React from 'react';
import React, { Component } from 'react';
import '../normalize.css';
import './CompanyModal.css';

export default class CompanyModal extends Component {

  companyModal() {
    openCompanyModal = document.querySelector("#company-modal-container")

    if (openCompanyModal.style.display = "block") {
      openCompanyModal.style.display = "none"
    }
  }

  render(){
    return(
      // Div id containing company 'register' and 'sign in'
      <div id="company-modal-container">
        <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet" />
        <h2 id="register-title-company">Company Register</h2>

        <div id="register-items-company">

          {/*1. Company Name Input*/}
          <input
          className="company-input"
          type="text"
          placeholder="Company Name"
          value={this.props.companyName}
          onChange={this.props.updateCompanyName}
          />
          <br />

          {/*2. Company Description Input*/}
          <input
          className="company-input"
          type="text"
          placeholder="Company Description"
          value={this.props.companyDescription}
          onChange={this.props.updateCompanyDescription}
          />
          <br />

          {/*3. Industry Input*/}
          <input
          className="company-input"
          type="text"
          placeholder="Industry"
          value={this.props.industry}
          onChange={this.props.updateIndustry}
          />
          <br />

          {/*4. City Input*/}
          <input
          className="company-input"
          type="text"
          placeholder="City"
          value={this.props.city}
          onChange={this.props.updateCity}
          />
          <br />

          {/*5. Wesite (company) Input*/}
          <input
          className="company-input"
          type="text"
          placeholder="Website"
          value={this.props.website}
          onChange={this.props.updateWebsite}
          />
          <br />

          {/*6. Username-register (company) Input*/}
          <input
          className="company-input"
          type="text"
          placeholder="Username"
          value={this.props.usernameCompany}
          onChange={this.props.updateUsernameCompany}
          />
          <br />

          {/*7. Password-register (company) Input*/}
          <input
          className="company-input"
          type="text"
          placeholder="Password"
          value={this.props.passwordCompany}
          onChange={this.props.updatePasswordCompany}
          />
          <br />

          {/*Button for Registering [company]*/}
          <button id="first-company-register-button" onClick={this.props.handleCompanyRegisterFormSubmit}>Register</button>
        </div>

        <hr id="line-style-two"/>

        {/* SIGN UP SECTION - company */}

        <h2 id="signin-title-company">Company Sign In</h2>

        <div id="sign-in-items-company">

          {/*1. Username-signin (company) Input*/}
          <input
          className="company-input-sign-in"
          type="text"
          placeholder="Username"
          value={this.props.usernameCompanySignIn}
          onChange={this.props.updateUsernameCompanySignIn}
          />
          <br />

          {/*2. Password-signin (company) Input*/}
          <input
          className="company-input-sign-in"
          type="text"
          placeholder="Password"
          value={this.props.passwordCompanySignIn}
          onChange={this.props.updatePasswordCompanySignIn}
          />
          <br />

          {/*Button for signing in [company]*/}
          <button id="second-company-register-button" onClick={this.props.handleCompanySignInFormSubmit}>Sign In</button>
        </div>
      </div>
    );
  }
}
