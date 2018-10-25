import React, { Component } from 'react';
import Nav from './candidate-navigation';

class CandidateConfirmation extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
            <Nav location={this.props.location.pathname}/>
                <div className="email-confirm">
                    <h3 className="center">Your application has been submitted</h3>
                    <h4 className="center">Reference number to your application has been emailed</h4>
                </div>

            </div>
        )
    }
}

export default CandidateConfirmation;