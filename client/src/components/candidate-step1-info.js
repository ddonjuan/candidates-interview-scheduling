import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CandidateStep1Info extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("These are the props: ", this.props);

        const { inputChange, uploadChange } = this.props;
        const { firstName, lastName, phone, email, c_email, school, interestedFunctions, yearOfGraduation, cv } = this.props;
        return (
            <div className="container step-1-page">
                <h2 className="center">Please fill out form.</h2>
                <form className="col s12" action="">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="First Name" onChange={inputChange} name="firstName" value={firstName} id="firstName" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" onChange={inputChange} name="lastName" value={lastName} id="lastName" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Phone Number" onChange={inputChange} name="phone" value={phone} id="phone" type="text" className="validate" />
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Email" onChange={inputChange} name="email" value={email} id="email" type="email" className="validate" />
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Confirm Email" onChange={inputChange } id="c_email" type="email" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="School of Pharmacy" onChange={inputChange} name="school" value={school} id="school" type="text" className="validate" />
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Expected year of graduation" onChange={inputChange} name="yearOfGraduation" value={yearOfGraduation} id="yearOfGraduation" type="month" className="validate" />
                            <label for="yearOfGradutation" className="active">Expected year of graduation</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select onChange={inputChange} name="interestedFunction" value={interestedFunctions} className="browser-default">
                                <option value="" disabled selected>Interested Functions</option>
                                <option value="Clinical Development">Clinical Development</option>
                                <option value="Medical Affairs">Medical Affairs (External Scientific Comm., Global Phase IV, Global Medical Comm.)</option>
                                <option value="Global Regulatory Affairs">Global Regulatory Affairs – CMC</option>
                                <option value="Clinical Pharmacology"> Clinical Pharmacology</option>
                            </select>
                        </div>
                    </div>
                    <blockquote>
                            *Notes: Medical Affairs Candidates will select individual function upon
completion of the 1st round of interview.
                        </blockquote>
                    <br/>
                    <div className="row">
                        <div className="file-field input-field">
                            <label for="btn" className="active">Upload CV/Resume</label>
                            <br/>
                            <div className="btn" name="btn">
                                <span>File</span>
                                <input type="file" onChange={uploadChange}/>
                            </div>
                            <div className="file-path-wrapper">
                                <input type="text" className="file-path validate" value={cv ? cv.name : ''} onChange={this.handleChange} placeholder="Select a file from your computer"/>
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