import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './candidate-navigation';


class CandidateStep1Info extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {enableSubmit} = this.props;
        const submitButton = enableSubmit ? <Link to="/candidate-step2-essays" className="waves-effect waves-light btn-large">Next</Link> : <button className="btn-large disabled">Next</button>
        const { inputChange, uploadChange } = this.props;
        const { firstName, lastName, phone, email, c_email, school, interestedFunction, yearOfGraduation, cv } = this.props;
        return (
            <div className="container step-1-page">
                <Nav location={this.props.location.pathname}/>
                <h3 className="center">Please fill out form.</h3>
                <div className="divider"></div>
                <form className="col s12" action="">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="First Name" onChange={inputChange} name="firstName" value={firstName} id="firstName" type="text" className=""/>
                            <label for="firstName" className="active">First Name</label>
                            <div className="hidDiv firstName">Field must contain at least one character</div>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" onChange={inputChange} name="lastName" value={lastName} id="lastName" type="text" className=""/>
                            <label for="lastName" className="active">Last Name</label>
                            <div className="hidDiv lastName">Invalid Input. Field must contain at least one character</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Phone Number" onChange={inputChange} name="phone" value={phone} id="phone" type="text" className=""/>
                            <label for="phone" className="active">Phone Number</label>
                            <div className="hidDiv phone">Invalid Input. Field must contain a total of 10 digits including area code with the exception of "()" and "-"</div>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Email" onChange={inputChange} name="email" value={email} id="email" type="email" className=""/>
                            <label for="email" className="active">Email</label>
                            <div className="hidDiv email">Invalid Input. Field must contain '@'</div>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Confirm Email" onChange={inputChange } name="c_email" id="c_email" type="email" value={c_email} className=""/>
                            <label for="c_email" className="active">Confirm Email</label>
                            <div className="hidDiv c_email">Email address does not match</div>
                            <div className="hidDiv c_emailRight">Email Matches</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 school-input">
                        
                            <input placeholder="School of Pharmacy" onChange={inputChange} name="school" value={school} id="school" type="text" className=""/>
                            <label for="school" className="active">School of Pharmacy</label>
                            <div className="hidDiv school">Invalid Input. Field must contain at least one character</div>
                        </div>
                        <div className="input-field col s12">
                        <br/>
                            <input placeholder="Expected year of graduation" onChange={inputChange} name="yearOfGraduation" value={yearOfGraduation} id="yearOfGraduation" type="month" className=""/>
                            <label for="yearOfGradutation" className="active year-label">Expected year of graduation</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <br/>
                            <select id="interestedFunction" onChange={inputChange} name="interestedFunction" value={interestedFunction} className="browser-default valid">
                                <option value="" disabled selected >Interested Functions</option>
                                <option value="Clinical Development">Clinical Development</option>
                                <option value="Medical Affairs">Medical Affairs (External Scientific Comm., Global Phase IV, Global Medical Comm.)</option>
                                <option value="Global Regulatory Affairs">Global Regulatory Affairs – CMC</option>
                                <option value="Clinical Pharmacology"> Clinical Pharmacology</option>
                            </select>
                            <label for="interestedFunctions" className="active">Interested Functions</label>
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
                                <input type="text" id="file-path" className="file-path" value={cv ? cv.name : ''} onChange={this.handleChange} placeholder="Select a file from your computer"/>
                            </div>
                            <div className="hidDivBlock file">File Successfully Uploaded</div>

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