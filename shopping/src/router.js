import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom"
//import {PrivateRoute} from "./routers/private"
import AsyncComponents from './components/async/asyncComponent';  //优化路由异步加载
const IndexComponent=AsyncComponents(()=>import('./pages/home/index/index.jsx')); //导入路由
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
