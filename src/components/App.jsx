// Import the libs we need and import components that parent wants to implement
import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import CompanyModal from './CompanyModal/CompanyModal.jsx';
import UserModal from './UserModal/UserModal.jsx';
import Main from './Main/Main.jsx'
import Home from './Home/Home.jsx'
// Import css/style
import './normalize.css';
import style from './App.css';


// Create a React Component called 'App' & Constructor
class App extends Component {
  constructor(){
    super();
    // initial states that will always changed over time
    this.state = {
      companyName: '',
      companyDescription: '',
      industry: '',
      city: '',
      website: '',
      usernameCompany: '',
      passwordCompany: '',
      // username
      // password
      firstName: '',
      lastName: '',
      email: '',
      college: '',
      degree: '',
      usernameUser: '',
      passwordUser: '',
      // username
      // password
    }

  }

  // COMPANY - REGISTER MODAL

  // This section updates all register inputs
  updateCompanyName(e) {
    this.setState({
      companyName: e.target.value,
    });
  }

  updateCompanyDescription(e) {
    this.setState({
      companyDescription: e.target.value,
    });
  }

  updateIndustry(e) {
    this.setState({
      industry: e.target.value,
    });
  }

  updateCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  updateWebsite(e) {
    this.setState({
      website: e.target.value,
    });
  }

  updateWebsite(e) {
    this.setState({
      website: e.target.value,
    });
  }

  updateUsernameCompany(e) {
    this.setState({
      usernameCompany: e.target.value,
    });
  }

  updatePasswordCompany(e) {
    this.setState({
      passwordCompany: e.target.value,
    });
  }

// Company Login Username and Login Password need to be entered here

// USER - REGISTER MODAL

  // This section updates all user inputs
  updateFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  updateLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  updateCollege(e) {
    this.setState({
      college: e.target.value,
    });
  }

  updateDegree(e) {
    this.setState({
      college: e.target.value,
    });
  }

  updateDegree(e) {
    this.setState({
      degree: e.target.value,
    });
  }

  updateUsernameUser(e) {
    this.setState({
      usernameUser: e.target.value,
    });
  }

  updatePasswordUser(e) {
    this.setState({
      passwordUser: e.target.value,
    });
  }

// Make sure to enter user login and password here (user)

  // Submit Register info/form in psql
  // handleCompanyRegisterFormSubmit() {
  //   fetch('/company', {
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       company_name: this.state.companyName,
  //       company_description: this.state.companyDescription,
  //       industry: this.state.industry,
  //       city: this.state.city,
  //       website: this.state.website,
  //       username: this.state.username,
  //       password: this.state.password,
  //     })
  //   })
  //   .then(this.setState ({
  //     companyName: '',
  //     companyDescription: '',
  //     industry: '',
  //     city: '',
  //     website: '',
  //     usernameCompany: '',
  //     passwordCompany: '',
  //   }))
  //   .catch(err => console.log(err));
  // }


  // Create a function for company and user modal buttons [main page]
  hiddenModal() {
    const openCompanyModal = document.querySelector("#company-modal-container");
    const openUserModal = document.querySelector("#user-modal-container");
    const modalBackground = document.querySelector(".modal-background");
    openCompanyModal.style.display = "none"
    openUserModal.style.display = "none"
    modalBackground.style.display = "none"
  }

  companyButton() {
    const openCompanyModal = document.querySelector("#company-modal-container");
    const modalBackground = document.querySelector(".modal-background");
    openCompanyModal.style.display = "block"
    modalBackground.style.display = "block"
  }

  userButton() {
    const openUserModal = document.querySelector("#user-modal-container");
    const modalBackground = document.querySelector(".modal-background");
    openUserModal.style.display = "block"
    modalBackground.style.display = "block"
  }


  render(){
    return (
      <div id="app-container">

      <div className="modal-background" onClick={this.hiddenModal.bind(this)}></div>

      <div id="top-nav">
        <h1 id="app-title">Alarina</h1>
      </div>

      {/*Modal Buttons for both Company and User register/login*/}
      <div id="main-page-top-button">
        <button className="company-btn" onClick={this.companyButton.bind(this)}>Company</button>
        <button className='company-btn' onClick={this.userButton.bind(this)}>User</button>
      </div>

      <div id="company-modal">
        {/*{this.state.register && */}
        <CompanyModal
          companyName = {this.state.companyName}
          companyDescription = {this.state.companyDescription}
          industry = {this.state.industry}
          city = {this.state.industry}
          website = {this.state.website}
          usernameCompany = {this.state.usernameCompany}
          passwordCompany = {this.state.passwordCompany}
        />
      </div>

      <div id="user-modal">
        <UserModal
          firstName = {this.state.firstName}
          lastName = {this.state.lastName}
          email = {this.state.email}
          college = {this.state.college}
          degree = {this.state.degree}
          usernameUser = {this.state.usernameUser}
          passwordUser = {this.state.passwordUser}
        />
      </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
