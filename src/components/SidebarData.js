import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BookIcon from "@material-ui/icons/Book";
import ClassIcon from "@material-ui/icons/Class";

export const SidebarData = [
  {
    title: "Classroom",
    path: "/Classroom",
    icon: <ClassIcon />,
    cName: "nav-text",
  },
  {
    title: "Project Suggestions",
    path: "/AddProjects",
    icon: <WorkIcon />,
    cName: "nav-text",
  },

  {
    title: "Assignments",
    path: "/AddAssignments",
    icon: <AssignmentIcon />,
    cName: "nav-text",
  },
  {
    title: "Books Suggestion",
    path: "/AddBooks",
    icon: <BookIcon />,
    cName: "nav-text",
  },
];
