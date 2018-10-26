import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CandidateStep1Info extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {enableSubmit} = this.props;
        const submitButton = enableSubmit ? <Link to="/candidate-step2-essays" className="waves-effect waves-light btn-large">Next</Link> : <button className="waves-effect waves-light btn-large">Next</button>

        const { inputChange, uploadChange } = this.props;
        const { firstName, lastName, phone, email, confirmEmail, school, interestedFunctions, yearOfGraduation, cv } = this.props;
        return (
            <div className="container step-1-page">
                <h1 className="center">Please fill out form carefully.</h1>
                <form className="col s12" action="">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="First Name" onChange={inputChange} name="firstName" value={firstName} id="firstName" type="text" className="validate" />
                            <label for="firstName" className="active">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" onChange={inputChange} name="lastName" value={lastName} id="lastName" type="text" className="validate" />
                            <label for="lastName" className="active">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Phone Number" onChange={inputChange} name="phone" value={phone} id="phone" type="text" className="validate" />
                            <label for="phone" className="active">Phone Number</label>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Email" onChange={inputChange} name="email" value={email} id="email" type="email" className="validate" />
                            <label for="email" className="active">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Confirm Email" onChange={inputChange} value={confirmEmail} id="confirmEmail" type="email" className="validate" />
                            <label for="confirmEmail" className="active">Confirm Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="School of Pharmacy" onChange={inputChange} name="school" value={school} id="school" type="text" className="validate" />
                            <label for="School of Pharmacy" className="active">School of Pharmacy</label>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Expected year of graduation" onChange={inputChange} name="yearOfGraduation" value={yearOfGraduation} id="yearOfGraduation" type="month" className="validate" />
                            <label for="yearOfGradutation" className="active">Expected year of graduation</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select onChange={inputChange} value={interestedFunctions} className="browser-default">
                                <option value="" disabled selected>Interested Functions</option>
                                <option value="clinicalDevelopment" name="Clinical Development">Clinical Development</option>
                                <option value="2">Medical Affairs</option>
                                <option value="3">Global Regulatory Affairs – CMC</option>
                                <option value="4"> Clinical Pharmacology</option>
                            </select>
                            <label for="interestedFunctions" className="active">Interested Functions</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="file-field input-field">
                            <label for="btn" className="active">Upload CV/Resume</label>
                            <div className="btn" name="btn">
                                <span>File</span>
                                <input type="file" onChange={uploadChange} />
                            </div>
                            <div className="file-path-wrapper">
                                <input type="text" className="file-path validate" value={cv ? cv.name : ''} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col s4 push-s5">
                        {submitButton}
                    </div>
                </div>

            </div>
        )
    }
}
export default CandidateStep1Info;