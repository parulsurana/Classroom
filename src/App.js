import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Try from "./components/try";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Sidebar from "./components/Sidebar";
import ClassNavBar from "./components/ClassNavBar";
import Form from "./components/Form";


function App() {
  console.log("Heya ");
  return (
    <Router>
      <Switch>
        {/* <Route path="/SideDrawer" component={SideDrawer} /> */}
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
        <Route path="/Sidebar" component={Sidebar} />
        <Route path="/try" component={Try} />
        <Route path="/form">
          <Form
          Sejal ={true}
           />
        </Route>
        <Route path="/forms">
          <Form
          Parul ={true}
           />
        </Route>
        <Route path="/ClassNavBar" component={ClassNavBar} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
