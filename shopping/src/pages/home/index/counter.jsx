import React from "react";
import {connect} from "react-redux";
import "./index.scss";
class IndexComponent extends React.Component{
  render(){
      return(
            <div className="div">
                子组件计数器：{this.props.state.counter.amount}
            </div>
      )
  }
}
export default connect((state) =>{
    return{
        state:state
    }
})(IndexComponent)