import React from "react";
import {connect} from "react-redux";
import Login2 from "./login2.jsx";
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }
    goBack(){
        this.props.history.goBack()
    }
    replacePage(path){
        this.props.history.replace(path)
    }
    onLogin(){
        localStorage["isLogin"] = true;
        localStorage["name"] = this.state.name;
        localStorage["uid"] = 1;
        //this.replacePage("/");
        this.props.dispatch({type:"Login",uid:localStorage["uid"],name:this.state.name,isLogin:true})
    }
    outLogin(){
        localStorage.removeItem("isLogin");
        localStorage.removeItem("name");
        localStorage.removeItem("uid");
        this.props.dispatch({type:"outLogin"}) 
        this.replacePage("/");
    }
    render(){
        return(
            <div>
                <button type="button" onClick={this.goBack.bind(this)}>返回</button>会员登录 <br/> 
                昵称：<input type="text" onChange={(e) =>{this.setState({name:e.target.value})}}/> <br/>
               显示昵称：{this.state.name}
               <Login2></Login2>
               <button type="button" onClick={this.onLogin.bind(this)}>登录</button> <br/>
               <button type="button" onClick={this.outLogin.bind(this)}>退出</button>
            </div>
        )
    }
}
export default connect((state) =>{
    return{
        state:state
    }
})(Login);