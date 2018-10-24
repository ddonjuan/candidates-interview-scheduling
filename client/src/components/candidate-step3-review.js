import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class CandidateConfirmationPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {firstName, lastName, phone, email, school, yearOfGraduation, cv, essay1, essay2} = this.props;
        return (
            <div className="container">
                <h1 className="center">Please review information listed</h1>
                <div className="row">
                    <div className="col s6">
                        <div className="first-name-review">First Name: {firstName}</div>
                    </div>
                    <div className="col s6">
                        <div className="last-name-review">Last Name: {lastName}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="email-review">Email: {email}</div>
                    </div>
                    <div className="col s6">
                        <div className="phone-review">Phone Number: {phone}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="school-review">School: {school}</div>
                    </div>
                    <div className="col s6">
                        <div className="graduate-date-review">Graduation Date: {yearOfGraduation}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="cv-file-review">CV File: {cv.name}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div>Response 1: </div>
                        <div className="essay-1-review">{essay1}</div>
                    </div>
                    <div className="col s12">
                        <div>Response 2: </div>
                        <div className="essay-2-review">{essay2}</div>
    
                    </div>
                </div>
                <div className="buttons center">
                    <Link to="/candidate-step2-essays" className="waves-effect waves-light btn-large back-button">Back</Link>
                    <Link to="/candidate-confirmation-page" className="waves-effect waves-light btn-large">Submit</Link>
                </div>
            </div>
        )
    }
}
export default CandidateConfirmationPage;
