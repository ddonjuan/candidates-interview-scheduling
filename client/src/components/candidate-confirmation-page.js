import React from 'react';
import dummyData from './dummy-data'

export default (props) => {
    return (
        <div className="container">
            <div className="email-confirm">
                <h3 className="center">Your application has been submitted</h3>
                <h4 className="center">Reference number to your application has been emailed to: </h4>
                <h4 className="center">{dummyData[0].email}</h4>
            </div>

        </div>
    )
}