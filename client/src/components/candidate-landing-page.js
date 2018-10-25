import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="container">
            <h3>Dear Candidates:</h3>
            <blockquote>
                <div className="row">
                Thank you for your interest in the USC-Allergan Industry Pharmaceutical
    Fellowship. Using this system, you can submit your pre-screening application
    materials for ASHP Midyear PPS interview (Anaheim, CA). Please remember
    to put down an active email on this application, we would suggest using your
    school email. Once we review your application material, we will sent out an
    invite to schedule 1st round interviews via a link to your email. We look
    forward for your application.
                </div>
                <div className="row">
                    <div className="right-align"><span>USC-Allergan Industry Pharmaceutical Fellowship</span></div>
                </div>
                <div className="row">
                    <div className="right-align"><span>2018 Candidate Selection Committee</span></div>
                </div>
            </blockquote>
            <div className="row">
                <div className="col s4 push-s4">
                    <Link to="/candidate-step1-info" className="waves-effect waves-light btn-large">Start Application</Link>
                </div>
            </div>
        </div>
    )
}