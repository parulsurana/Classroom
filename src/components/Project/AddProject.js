import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Card from "../Card";
import "./AddProject.css";


export default function AddClassroom() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:7000/project/";
      const response = await fetch(url);
      const data = await response.json();
      setProject(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="AddProject">
      <div className="AddProject_header">
        <Sidebar Menuicon={true} sideMenu={true} SidebuttonTypeThree={true} SidebuttonTypeFive={true} />
      </div>
      <div className="AddProject_item">
        {project.map((projects) => (
          <div key={projects.id}>
            <Card 
              title={projects.projectname}
              ImageUrl={"https://etimg.etb2bimg.com/photo/75729614.cms"}
              body={projects.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
