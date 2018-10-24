import React, { Component } from 'react';
import dummyData from './dummy-data';
import firebase from 'firebase';

class CandidateConfirmation extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        var firstName = this.props.state.firstName;
        var LastName = this.props.state.lastName;
        var config = {
            apiKey: 'AIzaSyAiaonRqttDyUYuezZshYwftS_nG6YFjPs',
            authDomain: 'interview-app-5def8.firebaseapp.com',
            databaseURL: 'https://interview-app-5def8.firebaseio.com/',
            storageBucket: 'gs://interview-app-5def8.appspot.com'
        };
        firebase.initializeApp(config);
        var storage = firebase.storage();
        var ref = storage.ref();
        var file = this.props.state.cv;
        var refName = firstName + "." + LastName + "." + file.name
        var uploadTask = ref.child(refName).put(file).then(function (snapshot) {
            console.log('Uploaded a blob or file!', snapshot);
            ref.child(refName).getDownloadURL().then(function (url) {
                var address = url
                console.log(address);
            }).catch(function (error) {
                console.log(error);
            });
        });
        this.props.reset();
    }
    render() {
        console.log("this is the state in the app: ", this.props.state);
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