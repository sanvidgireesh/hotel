import React from "react";
import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";
import Activities from "./Activities";
import Contact from "./Contact";
import Form from "./Form";
import Hooks from "./Hooks";
import {Route,Switch} from "react-router-dom";
function App() {
  return (
      <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/rooms" component={Rooms}/>
          <Route exact path="/activities" component={Activities}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/form" component={Form}/>
          <Route exact path="/hooks" component={Hooks}/>
          <Route component={Home}/>
      </Switch>
      </>
  );
}

export default App;
