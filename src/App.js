import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Sidebar from "./components/Sidebar";
import AddClassroom from "./components/Classroom/AddClassroom";
import AddProject from "./components/Project/AddProject";
import AddBook from "./components/Book/AddBook";
import BookCard from "./components/BookCard";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Instructor">
          <Signin Instructor={true} />
        </Route>
        <Route path="/Student">
          <Signin Student={true} />
        </Route>
        <Route path="/RegisterInstructor">
          <Signup Education={true} instructor={true} />
        </Route>
        <Route path="/RegisterStudent">
          <Signup Section={true} student={true} />
        </Route>
        <Route path="/Classroom">
          <AddClassroom />
        </Route>
        <Route path="/AddProjects">
          <AddProject />
        </Route>
        <Route path="/AddBooks">
        <AddBook />
        </Route>
        <Route path="/AddAssignments">
          <Sidebar SidebuttonTypeTwo={true} SidebuttonTypeFive={true} />
          <BookCard/>
        </Route>
        <Route path="/Classroom">

          {/* <Sidebar /> */}
          <AddClassroom/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
