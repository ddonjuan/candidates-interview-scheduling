import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="container">
            <h3>Dear Candidates:</h3>
            <blockquote>
                <div className="row">
                Thank you for your interest in the USC-Allergan Industry Pharmaceutical Fellowship. Due to the high volume of candidates and limited interview slots, interviews at the ASHP Midyear Meeting are granted on a competitive basis. Using this system, you can submit your pre-screening application materials. Please remember to include an active email on this application, we suggest using your school email. Selected candidates will be invited to schedule an interview at the 2018 ASHP Midyear PPS by email prior to December 1, 2018. Please be sure to bring a copy of your updated curriculum vitae.
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