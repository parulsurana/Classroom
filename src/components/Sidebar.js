import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../Assets/studyhunt.png";
import "./Sidebar.css";
import { IconButton } from "@material-ui/core";
import Button from "./Button";
import { SidebarData } from "./SidebarData";
import Popup from "./Popup";
import Form from "./Forms";

export default function Sidebar({
  SidebuttonTypeOne,
  SidebuttonTypeTwo,
  SidebuttonTypeThree,
  SidebuttonTypeFour,
  SidebuttonTypeFive,
  Menuicon,
  sideMenu
}) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          {Menuicon && (<Link to="#" className="menu-bars">
            <IconButton>
              <MenuIcon onClick={showSidebar} />
            </IconButton>
          </Link>)}
          <Link to="/">
            {" "}
            <img className="navbar-left_logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="SideButton">
          {SidebuttonTypeOne && (
            <Button
              buttonName="SidebuttonType"
              label="Create Class"
              onClick={() => setOpenPopup(true)}
            />
          )}
          {SidebuttonTypeOne && (
            <Popup
              title="Create Class"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              {" "}
              <Form AddClassroom={true} Buttonone={true}/>
            </Popup>
          )}
          {SidebuttonTypeTwo && (
            <Button
              buttonName="SidebuttonType"
              label="Add Assignment "
              onClick={() => setOpenPopup(true)}
            />
          )}
          {SidebuttonTypeTwo && (
            <Popup
              title="Add Assignment"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              {" "}
              <Form Assignment={true} />
            </Popup>
          )}
          {SidebuttonTypeThree && (
            <Button
              buttonName="SidebuttonType"
              label="Add Project"
              onClick={() => setOpenPopup(true)}
            />
          )}
          {SidebuttonTypeThree && (
            <Popup
              title="Add project"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              {" "}
              <Form Project={true} Buttontwo={true} />
            </Popup>
          )}
          {SidebuttonTypeFour && (
            <Button
              buttonName="SidebuttonType"
              label="Add Books"
              onClick={() => setOpenPopup(true)}
            />
          )}
          {SidebuttonTypeFour && (
            <Popup
              title="Add Books"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              {" "}
              <Form Book={true} Buttonthree={true} />
            </Popup>
          )}
          {SidebuttonTypeFive && (
            <Button buttonName="SidebuttonType" label="Update Profile " />
          )}
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
      </nav>)}
    </>
  );
}
