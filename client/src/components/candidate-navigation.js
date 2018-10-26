import React from 'react';

export default (props)=>{
    console.log(props.location);
    var normal = "nav-text nav-first-dot nav-button nav-line "
    var highlight = "nav-text-highlight nav-button-highlight nav-line-highlight"
    return (
        <nav className="dot">
            <div className="nav-wrapper">
                <div className="col s12 tag-wrapper">
                    <a href="#!" className={props.location === "/candidate-step1-info"?normal+highlight:normal}>Information</a>
                    <a href="#!" className={props.location === "/candidate-step2-essays"?normal+highlight:normal}>Response</a>
                    <a href="#!" className={props.location === "/candidate-step3-review"?normal+highlight:normal}>Review</a>
                    <a href="#!" className={props.location === "/candidate-confirmation-page"?normal+highlight:normal}>Confirmation</a>
                </div>
            </div>
        </nav>
    )
}