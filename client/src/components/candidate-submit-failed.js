import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div className="container">
            <div className="email-confirm">
                <h3 className="center">Your application has failed to submit.</h3>
                <h4 className="center">Please try again.</h4>
                <div className=" btn-again row">
                    <div className="col s5"></div>
                    <div className="col s3">
                        <Link to="/candidate-step1-info" className="waves-effect waves-light btn-large back-button">Try Again</Link>
                    </div>
                </div>
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