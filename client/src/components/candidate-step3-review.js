import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import axios from 'axios';
import Nav from './candidate-navigation';


class CandidateConfirmationPage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async insertStudent(url) {
        var userInfo = [{
            'firstName': this.props.firstName,
            'lastName': this.props.lastName,
            'phone': this.props.phone,
            'email': this.props.email,
            'school': this.props.school,
            'year': this.props.yearOfGraduation,
            'interest': this.props.interestedFunction,
            'cv': url,
            'essay1': this.props.essay1,
            'essay2': this.props.essay2
        }];
        try {
            await axios.post('http://localhost:8888/submit-information.php', { ...userInfo }).then(response => {
                console.log("Response", response);
                if (response.data.success) {
                    this.props.history.push({
                        pathname: '/candidate-confirmation-page'
                    });
                } else {
                    this.props.history.push({
                        pathname: '/candidate-submit-failed'
                    });
                }
            });
        } catch (err) {
            console.log("error", err);
            this.props.history.push({
                pathname: '/candidate-submit-failed'
            });
        }
    }
    handleSubmit() {
        var firstName = this.props.firstName;
        var LastName = this.props.lastName;
        var ts = Math.round((new Date()).getTime() / 1000);
        var config = {
            apiKey: 'AIzaSyAiaonRqttDyUYuezZshYwftS_nG6YFjPs',
            authDomain: 'interview-app-5def8.firebaseapp.com',
            databaseURL: 'https://interview-app-5def8.firebaseio.com/',
            storageBucket: 'gs://interview-app-5def8.appspot.com'
        };
        firebase.initializeApp(config);
        var storage = firebase.storage();
        var ref = storage.ref();
        var file = this.props.cv;
        var refName = ts + "." + firstName + "." + LastName + "." + file.name;
        var uploadTask = ref.child(refName).put(file).then(function (snapshot) {
            console.log(snapshot);
            if (snapshot.state === "success") {
                ref.child(refName).getDownloadURL().then(function (url) {
                    var address = url;
                    this.insertStudent(address);
                }.bind(this)).catch(function (error) {
                    console.log(error);
                    this.props.history.push({
                        pathname: '/candidate-submit-failed'
                    });
                });
            } else {
                this.props.history.push({
                    pathname: '/candidate-submit-failed'
                });
            }
        }.bind(this));
    }

    render() {
        const { firstName, lastName, phone, email, c_email, school, yearOfGraduation, interestedFunction, cv, essay1, essay2 } = this.props;
        return (
            <div className="container">
                <Nav location={this.props.location.pathname} />
                <h3 className="center">Please Confirm the Information</h3>
                <div className="divider"></div>
                <div className="row">
                    <div className="col s6">
                        <div className="first-name-review">
                            <h6>First Name:</h6>
                            <div className="card-panel">
                                {firstName}
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="last-name-review">
                            <h6>Last Name:</h6>
                            <div className="card-panel">
                                {lastName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="email-review">
                            <h6>Email:</h6>
                            <div className="card-panel">
                                {email}
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="phone-review">
                            <h6>Phone Number:</h6>
                            <div className="card-panel">
                                {phone}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="school-review">
                            <h6>School:</h6>
                            <div className="card-panel">
                                {school}
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="graduate-date-review">
                            <h6>Graduation Date:</h6>
                            <div className="card-panel">
                                {yearOfGraduation}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="interest-function-review">
                            <h6>Interested Function:</h6>
                            <div className="card-panel">
                                {interestedFunction}
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="cv-file-review">
                            <h6>CV File:</h6>
                            <div className="card-panel">
                                {cv ? cv.name : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div><h6>Response 1:</h6> </div>
                        <div className="card-panel">
                            <div className="essay-1-review"><span>{essay1}</span></div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div><h6>Response 2:</h6> </div>
                        <div className="card-panel">
                            <div className="essay-2-review">{essay2}</div>
                        </div>
                    </div>
                </div>
                <div className="row buttons center">
                    <div className="col s2"></div>
                    <div className="col s4">
                        <Link to="/candidate-step2-essays" className="waves-effect waves-light btn-large back-button">Back</Link>
                    </div>
                    <div className="col s4">
                        <button onClick={this.handleSubmit} className="waves-effect waves-light btn-large">Submit</button>
                    </div>
                    <div className="col s2"></div>
                </div>
                <div className="row">
                    <blockquote>*Please note, you will not be able to change your information once submitted,
please be sure to double check that all information submitted is correct.</blockquote>
                </div>
            </div>
        )
    }
}
export default CandidateConfirmationPage;
