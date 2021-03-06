import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BookIcon from "@material-ui/icons/Book";
import ClassIcon from "@material-ui/icons/Class";

export const SidebarData = [
  {
    title: "Create Classroom",
    path: "/AddClassroom",
    icon: <ClassIcon />,
    cName: "nav-text",
  },
  {
    title: "Add Project Suggestions",
    path: "/AddProjects",
    icon: <WorkIcon />,
    cName: "nav-text",
  },

  {
    title: "Create Assignments",
    path: "/AddAssignments",
    icon: <AssignmentIcon />,
    cName: "nav-text",
  },
  {
    title: "Add Books Suggestions",
    path: "/AddBooks",
    icon: <BookIcon />,
    cName: "nav-text",
  },
];
