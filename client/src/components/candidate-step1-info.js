import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    return (
        <div className="container">
            <h1>Please fill out form carefully.</h1>
            <form className="col s12" action="">
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="First Name" id="first-name" type="text" className="validate" />
                        {/* <label htmlFor="first-name">First Name</label> */}
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Last Name" id="last-name" type="text" className="validate" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Email" id="email" type="text" className="validate" />
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="Confirm Email" id="confirm-email" type="text" className="validate" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="School of Pharmacy" id="school" type="text" className="validate" />
                    </div>
                    <label htmlFor="year-of-gradutation">Expected year of graduation</label>
                    <div className="input-field col s12">
                        <input placeholder="Expected year of graduation" id="year-of-graduation" type="date" className="validate" />
                    </div>
                </div>
                <div className="row">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input type="file"/>
                        </div>
                        <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                </div>
            </form>
            <Link to="/candidate-step2-essays" className="waves-effect waves-light btn-large">Next -></Link>
        </div>
    )
}