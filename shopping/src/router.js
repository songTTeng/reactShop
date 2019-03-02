import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom"
//import {PrivateRoute} from "./routers/private"
import IndexComponent from "./pages/home/index/index.jsx"
class RouterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={IndexComponent}>

              </Route>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
      
    );
  }
}

export default RouterComponent;
