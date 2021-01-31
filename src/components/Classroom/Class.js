import React from "react";
import Sidebar from "../Sidebar";
import "./Class.css";
import {CardClick} from "./AddClassroom";
export default function Class({className, section}) {

  return (
  //  <CardClick>
    <div>
      <div className="AddClassroom_header">
        <Sidebar
          Menuicon={true}
          sideMenu={true}
          SidebuttonTypeFive={true}
        />{" "}
      </div>{" "}
      <div className="main">
        <div className="main__wrapper">
          <div className="main__content">
            <div className="main__wrapper1">
              <div className="main__bgImage">
                <div className="main__emptyStyles" />
              </div>{" "}
              <div className="main__text">
                <h1 className="main_heading main_overflow">
                  {" "}
                  {className}
                  Maths{" "}
                </h1>{" "}
                <div className="main_section main_overflow">
                  {" "}
                  {section}
                  QWERT{" "}
                </div>{" "}
                <div className="main__wrapper2">
                  <em className="main__code"> Class Code: </em>{" "}
                  <div className="main__id"> 12345 </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
    // </CardClick>
  );
}
