import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import AddClassroom from "./AddClassroom";
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
          <Card title="Artificial Intelligencies" ImageUrl="https://study.com/cimages/course-image/11th-grade-english-textbook_136273_large.jpg" body="Pinku rajan"/>
          <Card title="sejal" ImageUrl="https://i.pinimg.com/originals/d2/e5/80/d2e580ee8c4d6a04728e542f91d0d4ea.jpg" body="lorem"/>
          <Card title="sejal" ImageUrl="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWR5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" body="lorem"/>
          <Card title="sejal" ImageUrl="https://etimg.etb2bimg.com/photo/75729614.cms" body="lorem"/>
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
