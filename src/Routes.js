import React from "react";
import { Route, Switch } from "react-router-dom";

import home from "./larsen/Home/index";
import grid from "./larsen/grid";
import past from "./larsen/past";
import about from "./larsen/about";
import samples from "./larsen/samples";
import Quote from "./larsen/quote";
import more from "./larsen/more1";

import Intake from "./larsen/Intake";

import contact from "./larsen/contact";
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        
        <Route exact path ="/"component={home}/>
        <Route exact path ="/about"component={about}/>
        <Route exact path ="/samples"component={samples}/>
        
        <Route exact path ="/contact"component={contact}/>
        <Route
          render={function () {
            return <Route exact path ="/"component={home}/>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
