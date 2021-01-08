import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Sidebar from "./components/Sidebar";


function App() {
	console.log("Heya ");
  return (
     <Router>
     <Switch>
     <Route path='/loginasInstructor'>
       <Signin Instructor={true} />
     </Route>
     <Route path='/loginasStudent'>
       <Signin Student={true} />
     </Route>
     <Route path="/registerasainstructor">
       <Signup Education={true} instructor={true} />
     </Route>
     <Route path="/registerasastudent">
       <Signup Section={true} student={true} />
     </Route>
     <Route path="/Classroom">
       <Sidebar SidebuttonTypeOne={true} SidebuttonTypeFive={true}/>
     </Route>
      <Route path="/">
        <Home/>
      </Route>
     </Switch>
   </Router>
  );
}

export default App;
