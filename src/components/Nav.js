import React from 'react';
import logo from '../Assets/logo.png';

export default function Nav() {
    return (
        <div className="Nav">
            <nav className="Navbar">
                <img className="Logo" src={logo} alt="logo" />
            </nav>
            <p>Your class is only a click away...</p>
        </div>
    );
}

