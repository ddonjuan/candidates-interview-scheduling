import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import axios from 'axios';


class CandidateConfirmationPage extends Component{
    constructor(props){
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
            'cv': url,
            'essay1': this.props.essay1,
            'essay2': this.props.essay2
        }];
        console.log(userInfo);
        try{
            await axios.post('http://localhost:8888/submit-information.php', { ...userInfo }).then(response => {
            console.log("Response",response);
            this.props.history.push({
                pathname: '/candidate-confirmation-page'
              });
        });
        } catch(err){
            console.log("error", err);
        }
    }
    handleSubmit(){
        var firstName = this.props.firstName;
        var LastName = this.props.lastName;
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
        var refName = firstName + "." + LastName + "." + file.name
        var uploadTask = ref.child(refName).put(file).then(function (snapshot) {
            console.log('Uploaded a blob or file!', snapshot);
            ref.child(refName).getDownloadURL().then(function (url) {
                var address = url
                this.insertStudent(address);
                console.log(address);
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
        }.bind(this));
    }

    render(){
        const {firstName, lastName, phone, email, c_email, school, yearOfGraduation, cv, essay1, essay2} = this.props;
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
                    <button onClick={this.handleSubmit} className="waves-effect waves-light btn-large">Submit</button>
                </div>
            </div>
        )
    }
}
export default CandidateConfirmationPage;
