import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

import Toolbar from "./components/Toolbar";


function App() {
	console.log("Heya ");
  return (
     <Router>
     <Switch>
     {/* <Route path="/SideDrawer" component={SideDrawer} /> */}
      <Route exact path="/Toolbar" component={Toolbar} />
     
      <Route path="/" component={Home} />
     </Switch>
   </Router>
  );
}

export default App;
