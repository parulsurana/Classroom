import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = props => (
    <nav className="side_drawer">
        <ul>
            <li><Link to="/">CREATE CLASS</Link></li>
            <li><Link to="/">UPDATE CLASS</Link></li>
            <li><Link to="/">PROJECT/BOOK SUGGESTIONS</Link></li>
            <li><Link to="/">ASSIGNMENTS</Link></li>
            <li><Link to="/">PROFILE</Link></li>
        </ul>
    </nav>
);

export default SideDrawer;