import React, { createContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Card from "../Card";
import "./AddClassroom.css";

export default function AddClassroom() {

     const CardClick = async (cards) => {
      const url = "http://localhost:7000/info/"+cards;
      const response = await fetch(url);
      const dataa = await response.json();
      console.log(dataa);
      // return(
      //   <ClassContext.Provider>
      //   {cards.children}
      // </ClassContext.Provider>
      // )
  };

  const [create, setCreate] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:7000/info/";
      const response = await fetch(url);
      const data = await response.json();
      setCreate(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (

    <div className="AddClassroom">
      <div className="AddClassroom_header">
        <Sidebar Menuicon={false} sideMenu={false} SidebuttonTypeOne={true} SidebuttonTypeFive={true} />
      </div>
      

      <div className="AddClassroom_item">
        {create.map((creates) => (
          <div key={creates.id} onClick={() => CardClick(creates._id)} >
            <Card 
              title={creates.classname}
              ImageUrl={"https://etimg.etb2bimg.com/photo/75729614.cms"}
              body={creates.subject}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
