import React, { Component } from 'react';
import Nav from './candidate-navigation';

class CandidateConfirmation extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <Nav location={this.props.location.pathname} />
                <div className="email-confirm">
                    <h3 className="center">Your application has been submitted.</h3>
                    <h4 className="center">Confirmation has been emailed to:</h4>
                    <h4 className="center">{this.props.location.state.email}</h4>
                </div>
                <div className="email-question row">
                    <div className="col s10 push-s1">
                        <blockquote>
                            For any questions, please email <a href="mailto:ben.tsao@allergan.com">ben.tsao@allergan.com</a> or <a href="mailto:dilpreet.kaur@allergan.com">dilpreet.kaur@allergan.com</a>.
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidateConfirmation;