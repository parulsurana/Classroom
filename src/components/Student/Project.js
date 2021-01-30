import React, { useEffect, useState } from "react";
import SidebarS from "./SidebarS";
import "../Project/AddProject.css";
import ProjectCard from "../Project/ProjectCard";

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
        <SidebarS Menuicon={true} sideMenu={true} />
      </div>
      <div className="AddProject_item">
        {project.map((projects) => (
          <div key={projects.id}>
            <ProjectCard
              projectname={projects.projectname}
              ImageUrl={
                "https://github.com/parulsurana/Classroom/blob/master/src/Assets/project.jpg?raw=true"
              }
              features={projects.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
