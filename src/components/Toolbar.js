import React from 'react';
import {Link} from 'react-router-dom';
import "./Toolbar.css";
import logo from '../Assets/studyhunt.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';
import ClassNavBar from './ClassNavBar';


const Toolbar = props => (
    <header className="toolbar">
    <ClassNavBar />
        {/* <nav className="toolbar__navigation">
            <div> 
            <DrawerToggleButton />
            </div>
            <div className="toolbar__logo"><Link className="logo" to="/">
                <img src={logo} alt="logo" />
            </Link></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><Link to="/">CREATE CLASS</Link></li>
                    <li><Link to="/">UPDATE CLASS</Link></li>
                    <li><Link to="/">PROJECT/BOOK SUGGESTIONS</Link></li>
                    <li><Link to="/">ASSIGNMENTS</Link></li>
                    <li><Link to="/">PROFILE</Link></li>
                </ul>
            </div>
        </nav> */}
        <SideDrawer />
        <BackDrop />
    </header>
);

export default Toolbar;