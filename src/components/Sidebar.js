import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../Assets/studyhunt.png";
import "./ClassNavBar.css";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import Button from "./Button";
import { SidebarData } from "./SidebarData";
import ClassNavBar from "./ClassNavBar";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <div className="classNavBar">
          <Link to="#" className="menu-bars">
            <IconButton>
              <MenuIcon onClick={showSidebar} />
            </IconButton>
          </Link>
          <img className="classNavBar_logo" src={logo} alt="logo" />
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
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
      </nav>
    </>
  );
}
