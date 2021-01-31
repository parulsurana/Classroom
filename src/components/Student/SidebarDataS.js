import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BookIcon from "@material-ui/icons/Book";
import ClassIcon from "@material-ui/icons/Class";

export const SidebarDataS = [
  {
    title: "Classroom",
    path: "/Classroom",
    icon: <ClassIcon />,
    cName: "nav-text",
  },
  {
    title: "Project Suggestions",
    path: "/Projects",
    icon: <WorkIcon />,
    cName: "nav-text",
  },
  {
    title: "Books Suggestions",
    path: "/Books",
    icon: <BookIcon />,
    cName: "nav-text",
  },
];
