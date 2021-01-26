import React from 'react';
import studyhunt from '../Assets/studyhunt.png';


export default function Nav() {
    return (
        <div className="Nav">
            <nav className="Navbar">
                <img className="Logo" src={studyhunt} alt="studyhunt" />
            </nav>
            <p>Your class is only a click away...</p>
        </div>
    );
}

