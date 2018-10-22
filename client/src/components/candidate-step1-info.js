import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    return (
        <div className="container">
        <h1>This is step 1 info</h1>
            <Link to="/candidate-step2-essays" className="waves-effect waves-light btn-large">Next -></Link>
        </div>
    )
}