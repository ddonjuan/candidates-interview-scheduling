import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="container">
        <h1>Note to all of out candidates</h1>
        <p>hello and congratulations on being selected to interview. Please take a moment and fill out your personal information to get things started. Once completed you will be recieveing an email confirmation with you personal information details to the email address provided. Please fill out all forms correctly</p>
            <Link to="/candidate-step1-info" className="waves-effect waves-light btn-large">Start Application</Link>
        </div>
    )
}