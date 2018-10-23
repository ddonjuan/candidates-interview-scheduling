import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class CandidateStep2Essays extends Component{
    constructor(props){
        super(props);
    }

    charCount(event){
        let maxChar = 2000;
        let charLength = event.target.value.length;

        console.log("this is the char count: ", charLength);

    }

    render(){
        console.log("These are the props: ", this.props);
        const {inputChange} = this.props;
        return (
            <div className="container">
                <h4 className="center essay-title">Response</h4>
                <div className="divider"></div>
                <div className="row">
                    <div className="col s12">
                        <div className="col s6 essay-1">What interests you most about the pharmaceutical industry?</div>
                        <textarea onChange={inputChange} name="essay1" maxLength="2000" className="col s6 essay-1-input">This is the input</textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="col s6 essay-2">In which Allergan Fellowship are you interested most in, and why?</div>
                        <textarea maxLength="2000" onChange={inputChange} name="essay2" className="col s6 essay-2-input"></textarea>
                    </div>
                </div>
                <Link to="/candidate-step3-review" className="waves-effect waves-light btn-large">Next -></Link>
            </div>
        )
    }
}
export default CandidateStep2Essays;
