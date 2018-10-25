import React from 'react';
import Allergan from '../image/Allergan_Logo.png';
import USC from '../image/usc-pharm.jpg';

export default (props) => {
    return (
            <nav className="header blue lighten-5 ">
                <div className="nav-wrapper container valign-wrapper">
                    <div id="logo-wrapper" className="row valign-wrapper">
                        <img src={Allergan} className="logo col s3"/>
                        <div className="col s6"></div>
                        <img src={USC} className="logo col s3"/>
                    </div>
                </div>
            </nav>
    )
}