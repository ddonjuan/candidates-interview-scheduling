import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './candidate-header';
import Footer from './candidate-footer';
import CandidateLandingPage from './candidate-landing-page';
import CandidateStep1Info from './candidate-step1-info';
import CandidateStep2Essays from './candidate-step2-essays';
import CandidateStep3Review from './candidate-step3-review';
import CandidateConfirmationPage from './candidate-confirmation-page';
import CandidateSubmitFailed from './candidate-submit-failed';
import '../stylesheets/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			c_email: '',
			school: '',
			yearOfGraduation: '',
			interestedFunction: '',
			cv: null,
			cvName: '',
			essay1: '',
			essay2: '',
			textAreaChar: null,
			phoneCheck: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleUploadChange = this.handleUploadChange.bind(this);
		this.resetState = this.resetState.bind(this);
	}

	handleInputChange(event) {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
		this.charCount(name, value);
		this.inputValidationName(name, value);

	}

	handleUploadChange(event) {
		this.setState({
			'cv': event.target.files[0],
		})
		document.getElementsByClassName('file-path')[0].classList.add("valid");
		document.getElementsByClassName('file')[0].classList.add("displayFileBlock");
	}
	charCount(name, value) {
		let maxChar1 = 2000;
		let maxChar2 = 2000;
		let currentValue = value.length;
		let remainingChar1 = null;
		let remainingchar2 = null;
		var essay1Page = document.getElementsByClassName('remaining-input')[0];
		var essay2Page = document.getElementsByClassName('remaining-input-2')[0];

		switch (name) {
			case 'essay1':
				if (currentValue < maxChar1) {
					remainingChar1 = maxChar1 - currentValue;
					essay1Page.innerHTML = remainingChar1;
				}
				break;
			case 'essay2':
				if (currentValue < maxChar2) {
					remainingchar2 = maxChar2 - currentValue;
					essay2Page.innerHTML = remainingchar2;
				}
				break;
			default:
				break;
		}

		return;

  }
  showValid(name){
	document.getElementById(name).classList.remove("invalid", "showDiv");
	document.getElementById(name).classList.add("valid");
	document.getElementsByClassName(name)[0].classList.remove("showDiv");
  }
  showInvalid(name){
	document.getElementById(name).classList.remove("valid");
	document.getElementById(name).classList.add("invalid");
	document.getElementsByClassName(name)[0].classList.add("showDiv");
  }
  dropDownValidate(name, value){
	  if(value !== ""){
		document.getElementById(name).style.border="1px solid rgba(85,175,63,1)";
		return;
	  }
  }

  emailValidation(name, value){
	  if(name === 'email'){
		var emailCheck = /[@]/;
		var testEmail = emailCheck.test(value);
		if(testEmail){
			this.showValid(name);
			return;
		  }
		  this.showInvalid(name);
	  }
	  if(name === 'c_email'){
		const {email} = this.state;
		if(value === email){
			this.showValid(name);
			document.getElementsByClassName(name+"Right")[0].classList.add("showCEmail");
			return
		}
		this.showInvalid(name);
		document.getElementsByClassName(name+"Right")[0].classList.remove("showCEmail");
	  }


  }
  phoneValidation(name, value){
		var phoneNumTest = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
		var regTest = phoneNumTest.test(value)
		if(regTest){
			this.showValid(name);
			this.setState({
				phoneCheck: true
			});
			return
		}
		this.showInvalid(name);
		this.setState({
			phoneCheck: false
		});
  }
  nameValidationCheck(name, value){

	if(value.length === 0){
		this.showInvalid(name);
		return;
	}
	if(value.length > 0){
		this.showValid(name);
		return;
	}  
}
  inputValidationName(name, value){
    switch(name){
		case 'firstName':
		case 'lastName':
		case 'school':
			this.nameValidationCheck(name, value);
		break;	
		case 'phone':
			this.phoneValidation(name, value);
		break;
		case 'email':
		case 'c_email':
			this.emailValidation(name, value);
		break;	
		case 'yearOfGraduation':
		case 'interestedFunction':
			this.dropDownValidate(name, value);
    }
  }
	resetState() {
		this.setState({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			school: '',
			yearOfGraduation: '',
			interestedFunction: '',
			cv: null,
			cvName: '',
			essay1: '',
			essay2: '',
			textAreaChar: null,
		})
	}
	enableSubmitButton(){
		const {phoneCheck} = this.state;
		var stateMap = this.state;
		var counter  = 0;
		Object.keys(stateMap).forEach(key => {
			if(key !== 'textAreaChar' && key !== 'essay1' && key !== 'essay2' && key !== 'phoneCheck'){
				if(stateMap[key] !== '' && stateMap[key] !== null){
					counter++;
				}
			}
		});
		if(counter === 9 && phoneCheck){
			return true;
		}
		return false;
	}

	render() {
		const enableSubmit = this.enableSubmitButton();
		const { firstName, lastName, phone, email, c_email, school, yearOfGraduation, interestedFunction, cv, essay1, essay2 } = this.state;
		return (
			<div className="app">
				<Header />
				<div className="content">
					<Route exact path="/" component={CandidateLandingPage} />
					<Route path="/candidate-step1-info" render={(props) => <CandidateStep1Info {...props} firstName={firstName} lastName={lastName} phone={phone} email={email} school={school} yearOfGraduation={yearOfGraduation} interestedFunction={interestedFunction} cv={cv} essay1={essay1} essay2={essay2} enableSubmit={enableSubmit} inputChange={this.handleInputChange} uploadChange={this.handleUploadChange} />} />
					<Route path="/candidate-step2-essays" render={(props) => <CandidateStep2Essays {...props} essay1={essay1} essay2={essay2}  inputChange={this.handleInputChange} />} />
					<Route path="/candidate-step3-review" render={(props) => <CandidateStep3Review {...props} firstName={firstName} lastName={lastName} phone={phone} email={email} school={school} yearOfGraduation={yearOfGraduation} interestedFunction={interestedFunction} cv={cv} essay1={essay1} essay2={essay2} inputChange={this.handleInputChange} />} />
					<Route path="/candidate-confirmation-page" render={(props) => <CandidateConfirmationPage {...props} state={this.state} reset={this.resetState} />} />
					<Route path="/candidate-submit-failed" render={()=><CandidateSubmitFailed/>}/> 
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
