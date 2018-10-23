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
  constructor(props){
    super(props);

    this.state={
      essay1: '',
      essay2: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const {value, name} = event.target;
    this.setState({
        [name]: value
    });
}
  render() {
    const {essay1, essay2} = this.state;
    console.log("this is the state in app: ", this.state);
    return (
      <div className="app">
        <Header/>
        <Route exact path="/" component={CandidateLandingPage}/>
        <Route path="/candidate-step1-info" render={(props)=><CandidateStep1Info {...props} inputChange={this.handleInputChange}/>}/>
        <Route path="/candidate-step2-essays" render={(props)=> <CandidateStep2Essays {...props} essay1={essay1} essay2={essay2} inputChange={this.handleInputChange}/>}/>
        <Route path="/candidate-step3-review" render={(props)=><CandidateStep3Review {...props}/>}/>
        <Route path="/candidate-confirmation-page" render={(props)=><CandidateConfirmationPage {...props}/>}/>
      </div>
    );
  }
}

export default App;
