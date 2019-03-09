//入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import "url-search-params-polyfill"; //兼容ie
import "whatwg-fetch" //使用fatch
import {createStore,combineReducers} from "redux";//需要在入口文件引入
import {Provider} from "react-redux"; // Provuder的作用将仓库的值分配给组件 
import RouterComponent from './router'; //所有的路由
import * as serviceWorker from './serviceWorker';
import "./common.scss"; //公用的样式
//2.商品装车 相当于储存 (加减数据)
function counterReducer(state={amount:0},action){
   switch(action.type){
        case "inc":
            return {amount:action.amount};
        case "dec":
            return {amount:action.amount}    
        default:
            return state;
   }
} 
//姓名信息存储  (当存储数据较多时)
let userState={
    uid:localStorage["uid"] !== undefined ? localStorage["uid"] : "",
    name:localStorage["name"] !== undefined ? localStorage["name"] : "",
    isLogin:localStorage["isLogin"] !== undefined ? Boolean(localStorage["isLogin"]) : false,
} 
function userReducer(state=userState,action){
    switch(action.type){
        case "Login":
            return {uid:action.uid,name:action.name,isLogin:action.isLogin};  
        case "outLogin":
            return {uid:"",name:"",isLogin:false};        
         default:
            return state;
    }
}
//当需要存储数据种类较多时使用
let reducers = combineReducers({
    counter:counterReducer,
    userInfo:userReducer
})  
//3.存入仓库
let store = createStore(reducers); //如果只有一个直接引入
class App extends React.Component{
    render(){
        return(
            //provuder的作用将仓库的值分配给组件
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
