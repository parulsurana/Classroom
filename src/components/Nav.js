import React from 'react';
import logo from '../components/Images/logo.png';


export default function Nav() {
    return (
        <div>
            <nav>
                <img className="Logo" src={logo} alt="logo" />
            </nav>
        </div>
    );
}

