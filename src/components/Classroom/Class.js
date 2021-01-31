import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Class.css";
import {CardClick} from "./AddClassroom";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "../../mailSlice";
import { useSelector } from "react-redux";

export default function Class({className, section}) {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  console.log(selectedMail?.ide);
  
const [cards, setCards] = useState("");
setCards(selectedMail?.ide);

    useEffect((cards) => {
      async function fetchData(cards) {
        const url = "http://localhost:7000/info/"+cards;
     const response = await fetch(url);
   const dataa = await response.json();
  console.log(dataa);
      }
      fetchData(cards);
    }, []);

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
                 
                </h1>{" "}
                <div className="main_section main_overflow">
                  {" "}
                  {section}
               
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
