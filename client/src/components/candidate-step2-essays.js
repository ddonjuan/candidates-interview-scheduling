import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './candidate-navigation';


class CandidateStep2Essays extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("These are the props: ", this.props);
        const { inputChange, essay1, essay2 } = this.props;
        return (
            <div className="container">
                <Nav location={this.props.location.pathname} />
                <h3 className="center essay-title">Response</h3>
                <div className="divider"></div>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s12 essay-1">
                                <strong>What interests you most about the pharmaceutical industry?</strong>
                            </div>
                        </div>
                        <textarea placeholder="Enter response here...(limited to 2000 characters)" value={essay1} onChange={inputChange} name="essay1" maxLength="2000" className="col s12 essay-1-input"></textarea>
                        <div className="right remaining-1">remaining characters: <span className="remaining-input">2000</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s12 essay-2">
                                <strong>In which Allergan Fellowship are you interested most in, and why?</strong>
                            </div>
                        </div>
                        <textarea placeholder="Enter response here...(limited to 2000 characters)" value={essay2} maxLength="2000" onChange={inputChange} name="essay2" className="col s12 essay-2-input"></textarea>
                        <div className="right remaining-2">remaining characters: <span className="remaining-input-2">2000</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s4">
                        <Link to="/candidate-step1-info" className="waves-effect waves-light btn-large back-button">Back</Link>
                    </div>
                    <div className="col s4">
                        <Link to="/candidate-step3-review" className="waves-effect waves-light btn-large">Next</Link>
                    </div>
                    <div className="col s1"></div>
                </div>
            </div>
        )
    }
}
export default CandidateStep2Essays;
