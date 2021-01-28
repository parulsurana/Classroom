import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Sidebar from "./components/Sidebar";
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
        <Route path="/AddClassroom">
          <Sidebar SidebuttonTypeOne={true} SidebuttonTypeFive={true} />
        </Route>
        <Route path="/AddProjects">
          <Sidebar SidebuttonTypeThree={true} SidebuttonTypeFive={true} />
        </Route>
        <Route path="/AddBooks">
          <Sidebar SidebuttonTypeFour={true} SidebuttonTypeFive={true} />
        </Route>
        <Route path="/AddAssignments">
          <Sidebar SidebuttonTypeTwo={true} SidebuttonTypeFive={true} />
        </Route>
        <Route path="/Classroom">
          <Sidebar />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
