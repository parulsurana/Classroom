import React from 'react';
import logo from '../Assets/studyhunt.png'
import './ClassNavBar.css';

export default function ClassNavBar() {
    return (
        <div className="classNavBar">
            <div className="classNavBar_left">
                <img className="classNavBar_logo" src={logo} alt="logo"/>
            </div>
            <div className="classNavBar_right"></div>
        </div>
    )
}
