import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="container">
        <h1>This is where candidate will review info</h1>
            <Link to="/candidate-confirmation-page" className="waves-effect waves-light btn-large">Submit</Link>
        </div>
    )
}
