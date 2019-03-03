import React from "react";
import {connect} from "react-redux";
class Login2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
 
    render(){
        return(
            <div>
               显示子组件id：{this.props.state.userInfo.uid} 
               显示子组件昵称：{this.props.state.userInfo.name}
            </div>
        )
    }
}
export default connect((state) =>{
    return{
        state:state
    }
})(Login2);
