/** home下的组件*/
import React from "react";
import {connect} from "react-redux";
import "./index.scss";
import CounterComonent from "./counter.jsx";

class IndexComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.iAmount =0;
    }
    //减
    decBtn(){
        this.iAmount--
        //console.log(this.iAmout) 
        //1.对商品进行选择 相当于传参
        this.props.dispatch({type:"dec",amount:this.iAmount})
    }
    //加
    incBtn(){
       this.iAmount++
       //console.log(this.iAmout) 
       //1.对商品进行选择 相当于传参
       this.props.dispatch({type:"inc",amount:this.iAmount})
    }
    goPage(path){
        this.props.history.push(path);
    }
    render(){
      return(
            <div className="div">
               <CounterComonent></CounterComonent> 
               计数器：{this.props.state.counter.amount} <br />
               <button type="button" onClick={this.decBtn.bind(this)}>-</button>&nbsp;&nbsp;
               <button type="button" onClick={this.incBtn.bind(this)}>+</button>
               <br/>
               <button type="button" onClick={this.goPage.bind(this,"/login")}>会员登录</button>
               {/* <button type="button" onClick={this.goPage.bind(this)}>个人资料</button> */}
            </div>
      )
  }
}
//组件与redux关联
export default connect((state) =>{
    return{
        state:state
    }
})(IndexComponent);