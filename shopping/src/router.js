import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import AsyncComponents from './components/async/asyncComponent';  //优化路由异步加载
import config from './assets/js/conf/config.js'; //地址管理
//路由管理  (二级路由页面)
const HomeComponent=AsyncComponents(()=>import('./pages/home/home/index.jsx'));

class RouterComponent extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
                {/* 控制home页面的路由 */}
                <Route path={config.path+"home"} component={HomeComponent} ></Route>
                {/* Redirect默认进入到这个页面 */}
                <Redirect to={config.path+"home/index"}></Redirect>    
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
      
    );
  }
}

export default RouterComponent;
