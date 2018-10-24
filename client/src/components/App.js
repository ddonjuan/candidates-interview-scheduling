import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './candidate-header';
import CandidateLandingPage from './candidate-landing-page';
import CandidateStep1Info from './candidate-step1-info';
import CandidateStep2Essays from './candidate-step2-essays';
import CandidateStep3Review from './candidate-step3-review';
import CandidateConfirmationPage from './candidate-confirmation-page';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      school: '',
      yearOfGraduation: '',
      cv: null,
      essay1: '',
      essay2: '',
      textAreaChar: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUploadChange = this.handleUploadChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount(){

  }
  disableBackButton

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
    this.charCount(name, value);
  }

  handleUploadChange(event){
    this.setState({
      'cv': event.target.files[0]
    })
  }

  charCount(name, value) {
    let maxChar = 2000;
    let currentValue = value.length;
    let remainingChar = null;
    var essay1Page = document.getElementsByClassName('remaining-input')[0];
    switch (name) {
      case 'essay1':
        if (currentValue < maxChar) {
          remainingChar = maxChar - currentValue
          essay1Page.innerHTML = remainingChar;
        }
        break;
      case 'essay2':
        if (value.length < maxChar) {
          essay1Page.innerHTML = value.length;
        }
        break;
      default:
        break;
    }

    return;

  }
  resetState(){
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      school: '',
      yearOfGraduation: '',
      cv: null,
      essay1: '',
      essay2: '',
      textAreaChar: null

    })
  }
  characterTrim(essay) {

  }
  render() {
    console.log("this is the state: ", this.state.textAreaChar);
    const { firstName, lastName,phone, email, school, yearOfGraduation, cv, essay1, essay2 } = this.state;
    console.log("this is the state in app: ", this.state);
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={CandidateLandingPage} />
        <Route path="/candidate-step1-info" render={(props) => <CandidateStep1Info {...props} inputChange={this.handleInputChange} uploadChange={this.handleUploadChange} />} />
        <Route path="/candidate-step2-essays" render={(props) => <CandidateStep2Essays {...props} essay1={essay1} essay2={essay2} inputChange={this.handleInputChange} />} />
        <Route path="/candidate-step3-review" render={(props) => <CandidateStep3Review {...props} firstName={firstName} lastName={lastName} phone={phone} email={email} school={school} yearOfGraduation={yearOfGraduation} cv={cv} essay1={essay1} essay2={essay2} inputChange={this.handleInputChange} />} />
        <Route path="/candidate-confirmation-page" render={(props) => <CandidateConfirmationPage {...props} state={this.state} reset={this.resetState}/>} />
      </div>
    );
  }
}

export default App;
