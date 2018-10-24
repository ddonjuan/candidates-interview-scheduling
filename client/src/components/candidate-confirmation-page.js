import React, { Component } from 'react';
import dummyData from './dummy-data';
// import firebase from 'firebase';
// import axios from 'axios';

class CandidateConfirmation extends Component {
    constructor(props) {
        super(props);
    }

    // async insertStudent(url) {
    //     var userInfo = {
    //         firstName: this.props.state.firstName,
    //         lastName: this.props.state.lastName,
    //         phone: this.props.state.phone,
    //         email: this.props.state.email,
    //         school: this.props.state.school,
    //         year: this.props.state.yearOfGraduation,
    //         cv: url,
    //         essay1: this.props.state.essay1,
    //         essay2: this.props.state.essay2
    //     }
    //     await axios.post('http://localhost:8888/submit-information.php', { userInfo }).then(response => {
    //         console.log(response);
    //     });
    // }

    // componentWillMount() {
    //     var firstName = this.props.state.firstName;
    //     var LastName = this.props.state.lastName;
    //     var config = {
    //         apiKey: 'AIzaSyAiaonRqttDyUYuezZshYwftS_nG6YFjPs',
    //         authDomain: 'interview-app-5def8.firebaseapp.com',
    //         databaseURL: 'https://interview-app-5def8.firebaseio.com/',
    //         storageBucket: 'gs://interview-app-5def8.appspot.com'
    //     };
    //     firebase.initializeApp(config);
    //     var storage = firebase.storage();
    //     var ref = storage.ref();
    //     var file = this.props.state.cv;
    //     var refName = firstName + "." + LastName + "." + file.name
    //     var uploadTask = ref.child(refName).put(file).then(function (snapshot) {
    //         console.log('Uploaded a blob or file!', snapshot);
    //         ref.child(refName).getDownloadURL().then(function (url) {
    //             var address = url
    //             console.log(this);
    //             this.insertStudent(address);
    //             console.log(address);
    //         }.bind(this)).catch(function (error) {
    //             console.log(error);
    //         });
    //     }.bind(this));
    // }
    render() {
        return (
            <div className="container">
                <div className="email-confirm">
                    <h3 className="center">Your application has been submitted</h3>
                    <h4 className="center">Reference number to your application has been emailed to: </h4>
                    <h4 className="center">{dummyData[0].email}</h4>
                </div>

            </div>
        )
    }
}

export default CandidateConfirmation;