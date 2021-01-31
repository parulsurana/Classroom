import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "../Sidebar.css";
import { IconButton } from "@material-ui/core";
import { SidebarDataS } from "./SidebarDataS";


export default function Sidebar({
  Menuicon,
  sideMenu
}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          {Menuicon && (<Link to="#" className="menu-bars">
            <IconButton>
              <MenuIcon onClick={showSidebar} style={{fill: "#fff"}} />
            </IconButton>
          </Link>)}
          <Link to="/">
            {" "}
            <img className="navbar-left_logo" src="https://github.com/parulsurana/Classroom/blob/master/src/Assets/studyhunt.png?raw=true" alt="logo" />
          </Link>
        </div>
        </div>
       
      {sideMenu && (<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Link>
          </li>
          {SidebarDataS.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>)}
    </>
  );
}
