import React from 'react';
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BookIcon from "@material-ui/icons/Book";

export const SidebarData = [
    {
      title: 'Project Suggestions',
      path: '/',
      icon: <WorkIcon/>,
      cName: 'nav-text'
    },
    {
      title: 'Assignments',
      path: '/',
      icon: <AssignmentIcon/>,
      cName: 'nav-text'
    },
    {
      title: 'Books Suggestion',
      path: '/',
      icon: < BookIcon/>,
      cName: 'nav-text'
    },
  ];