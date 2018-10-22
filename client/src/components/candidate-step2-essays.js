import React from 'react';
import { Link } from 'react-router-dom';


export default (props)=>{
    return(
        <div className="container">
            <h1>This is where step essays go</h1>
            <Link to="/candidate-step3-review" className="waves-effect waves-light btn-large">Next -></Link>
        </div>
    )
}