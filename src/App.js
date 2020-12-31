import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

import Toolbar from "./components/Toolbar";


function App() {
	console.log("Heya ");
  return (
     <Router>
     <Switch>
     {/* <Route path="/SideDrawer" component={SideDrawer} /> */}
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Signin" component={Signin} />
      <Route exact path="/Toolbar" component={Toolbar} />
     
      <Route path="/" component={Home} />
     </Switch>
   </Router>
  );
}

export default App;
