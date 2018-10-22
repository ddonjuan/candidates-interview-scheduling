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

    // this.state={

    // }
  }
  render() {
    return (
      <div className="app">
        <Header/>
        <Route exact path="/" component={CandidateLandingPage}/>
        <Route path="/candidate-step1-info" component={CandidateStep1Info}/>
        <Route path="/candidate-step2-essays" component={CandidateStep2Essays}/>
        <Route path="/candidate-step3-review" component={CandidateStep3Review}/>
        <Route path="/candidate-confirmation-page" component={CandidateConfirmationPage}/>
      </div>
    );
  }
}

export default App;
