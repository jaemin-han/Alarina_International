// Import the libs we need and import components that parent wants to implement
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import CompanyModal from './CompanyModal/CompanyModal.jsx';
import UserModal from './UserModal/UserModal.jsx';
import About from './About/About.jsx';

// Import css/style
import './normalize.css';
import './App.css';

// Create a React Component called 'App' & Constructor
class App extends Component {
  constructor(props) {


    super(props);
    // initial states that will always changed over time
    this.getCompany = this.getCompany.bind(this);


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
      jobs: [],
      // companyinfo: [],
      searchTerm: '',
      company: [],
      getCompany: this.getCompany
    };
  }


// GLOBAL FUNCTIONS
  componentDidMount() {
    this.getAllJobs();
    // this.getAllCompaniesByPosition();
    // this.getCompany();
  }
// ******************************************//

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

  // updateWebsite(e) {
  //   this.setState({
  //     website: e.target.value,
  //   });
  // }

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
// ******************************************//

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
// ******************************************//

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
// ******************************************//

// CREATE A FUNCTION THAT WILL DISPLAY THE COMPANY BY POSITION ID
 // job.company_id

// GET COMPANY INFO BASED ON  POSITION
  getCompany(id) {
    console.log('fetching..yes!!');
    fetch(`/company/companyInfo/${id}`)
    .then(r => r.json())
    .then((company) => {
      this.setState({
        company: company,
      });
      console.log('the new state', this.state.company);
    })
    .then(()=>browserHistory.push('/position'))
    .catch(error => console.log(error));
  }

  // getCompany() {
  //   fetch(`/company/getCompanyInfo/`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'GET',
  //   })
  //   .then(r => r.json())
  //   .then((company) => {
  //   console.log(company);
  //     this.setState({
  //       company: company,
  //     });
  //     console.log('the new state', this.state.company);
  //   })
  //   .catch(err => console.log('getComment', err));
  // }
// ******************************************//


// RENDERING SEARCH INFO BASED ON USER'S QUERY
handleUpdateSearch(e) {
  this.setState({
    searchTerm: e.target.value,
  });
}

handleSubmitSearch() {
  console.log("searchTerm is", this.state.searchTerm)
  fetch(`/job/allPositions/${this.state.searchTerm}`)
  .then(r => r.json())
  .then((jobs) => {
    console.log(jobs);
    console.log(jobs.job_company);
    this.setState({
      searchTerm: jobs.job_company,
    });
  });
}
// ******************************************//

// RENDER ALL DATA (job positions) on Main.jsx file
  getAllJobs() {
    fetch('/job/allPositions')
    .then(r => r.json())
    .then((jobs) => {
      this.setState({
        jobs: jobs,
      });
      console.log('the current state', this.state.jobs);
    })
    .catch(error => console.log(error));
  }
// ******************************************//

// RENDER ALL COMPANY DATA on Job.jsx file
  // getAllCompaniesByPosition() {
  //   fetch('/company/getCompanyInfo')
  //   .then(r => r.json())
  //   .then((companyinfo) => {
  //     this.setState({
  //       companyinfo: companyinfo,
  //     });
  //     console.log('the current state', this.state.companyInfo);
  //   })
  //   .catch(error => console.log(error));
  // }
  // ******************************************//


// Create a function for company and user modal buttons [main page]
  hiddenModal() {
    const openCompanyModal = document.querySelector("#company-modal-container");
    const openUserModal = document.querySelector("#user-modal-container");
    const openAboutModal = document.querySelector("#about-modal-container");
    const modalBackground = document.querySelector(".modal-background");
    openCompanyModal.style.display = "none"
    openUserModal.style.display = "none"
    openAboutModal.style.display = "none"
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

  aboutButton() {
    const openAboutModal = document.querySelector("#about-modal-container");
    const modalBackground = document.querySelector(".modal-background");
    openAboutModal.style.display = "block"
    modalBackground.style.display = "block"
  }
// ******************************************//

  render() {
    return (
      <div id="app-container">

      <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet" />

      <div className="modal-background" onClick={this.hiddenModal.bind(this)}></div>

      <div id="top-nav">
        <h1 id="app-title">Alarina</h1>
      </div>

      {/*Modal Buttons for both Company and User register/login*/}
      <div id="main-page-top-button">
        <button className="company-btn" onClick={this.userButton.bind(this)}>User</button>
        <button className="company-btn" onClick={this.companyButton.bind(this)}>Company</button>
        <button className="company-btn" onClick={this.aboutButton.bind(this)}>About</button>
      </div>

        <div id="company-modal">
        {/*{this.state.register && */}
          <CompanyModal
            companyName={this.state.companyName}
            companyDescription={this.state.companyDescription}
            industry={this.state.industry}
            city={this.state.industry}
            website={this.state.website}
            usernameCompany={this.state.usernameCompany}
            passwordCompany={this.state.passwordCompany}
          />
        </div>

        <div id="user-modal">
          <UserModal
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            college={this.state.college}
            degree={this.state.degree}
            usernameUser={this.state.usernameUser}
            passwordUser={this.state.passwordUser}
          />
        </div>

        <div id="about-modal">
          <About />
        </div>

        {this.props.children && React.cloneElement(this.props.children, {
          state: this.state,
        })}

      </div>
    );
  }
};

export default App;
