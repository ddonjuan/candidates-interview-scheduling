import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CandidateStep1Info extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("These are the props: ", this.props);

        const { inputChange } = this.props;
        return (
            <div className="container">
                <h1>Please fill out form carefully.</h1>
                <form className="col s12" action="">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="First Name" onChange={inputChange} name="firstName" id="firstName" type="text" className="validate" />
                            {/* <label htmlFor="first-name">First Name</label> */}
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" onChange={inputChange} name="lastName" id="lastName" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Email"  onChange={inputChange} name="email" id="email" type="email" className="validate" />
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Confirm Email" onChange={inputChange} id="confirm-email" type="email" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="School of Pharmacy" onChange={inputChange} name="school" id="school" type="text" className="validate" />
                        </div>
                        <label htmlFor="year-of-gradutation">Expected year of graduation</label>
                        <div className="input-field col s12">
                            <input placeholder="Expected year of graduation" onChange={inputChange} name="yearOfGraduation" id="yearOfGraduation" type="month" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" name="cv"/>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" onChange={inputChange} name="cv" type="text" />
                            </div>
                        </div>
                    </div>
                </form>
                <Link to="/candidate-step2-essays" className="waves-effect waves-light btn-large">Next -></Link>
            </div>
        )
    }
}
export default CandidateStep1Info;