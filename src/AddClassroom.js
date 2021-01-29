import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import "./AddClassroom.css";
import { Grid } from "@material-ui/core";

export default function AddClassroom() {
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
          <div key={creates.id}>
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
