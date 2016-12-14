import React, { Component } from 'react';
import '../normalize.css';
import './UserModal.css';

export default class UserModal extends Component {

  userModal() {
    openUserModal = document.querySelector("#user-modal-container")
    if (openUserModal.style.display = "block") {
      openUserModal.style.display = "none"
    }
  }

  render() {
    return (
      //Div id containing user 'register' and 'sign in'
      <div id="user-modal-container">
      <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet" />

      <h2 id="register-title-user">User Register</h2>

        <div id="register-items-user">

          {/*1. User First Name Input*/}
          <input
            className="user-input"
            type="text"
            placeholder="First Name"
            value={this.props.firstName}
            onChange={this.props.updateFirstName}
          />
          <br />

          {/*2. User Last Name Input*/}
          <input
            className="user-input"
            type="text"
            placeholder="Last Name"
            value={this.props.lastName}
            onChange={this.props.updateLastName}
          />
          <br />

          {/*3. User email Input*/}
          <input
            className="user-input"
            type="text"
            placeholder="Email"
            value={this.props.email}
            onChange={this.props.updateEmail}
          />
          <br />

          {/*4. User college Input*/}
          <input
            className="user-input"
            type="text"
            placeholder="College"
            value={this.props.college}
            onChange={this.props.updateCollege}
          />
          <br />

          {/*5. User username Input*/}
          <input
            className="user-input"
            type="text"
            placeholder="Username"
            value={this.props.usernameUser}
            onChange={this.props.updateUsernameUser}
          />
          <br />

          {/*6. User degree Input -- changed order to modal setup*/}
          <input
            className="user-input"
            type="text"
            placeholder="Degree"
            value={this.props.degree}
            onChange={this.props.updateDegree}
          />
          <br />

          {/*7. User password Input*/}
          <input
            className="user-input"
            type="text"
            placeholder="Password"
            value={this.props.passwordUser}
            onChange={this.props.updatePasswordUser}
          />
          <br />

           {/*Button for Registering [user]*/}
          <button id="first-user-modal-button" onClick={this.props.handleUserRegisterFormSubmit}>Register</button>
        </div>

        <hr id="line-style"/>

        {/* SIGN UP SECTION - company */}

        <h2 id="signin-title-user">User Sign In</h2>

        <div id="sign-in-items-user">

          {/*1. Username-signin (company) Input*/}
          <input
            className="user-input-sign-in"
            type="text"
            placeholder="Username"
            value={this.props.usernameUserSignIn}
            onChange={this.props.updateUsernameUserSignIn}
          />
          <br />

          {/*2. Password-signin (company) Input*/}
          <input
            className="user-input-sign-in"
            type="text"
            placeholder="Password"
            value={this.props.passwordUserSignIn}
            onChange={this.props.updatePasswordCompanySignIn}
          />
          <br />

          {/*Button for signing in [company]*/}
          <button id="second-user-modal-button" onClick={this.props.handleUserSignInFormSubmit}>Sign In</button>
        </div>
      </div>
    );
  }
}
