import React from "react";
import {connect} from "react-redux";
class Login2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    checkType(){
        // var sReg = /^(?:image\/jpeg|image\/jpg|image\/png)$/i;
        // var reg = "image/png";
        // if(!sReg.test(reg)){
        //     console.log("图片格式不正确")
        //     return false;
        // }
        
        var imgFile = document.getElementById("imgFile").files[0];
        console.log("imgFile",imgFile)
        var reg = imgFile.type;
        var imgType3 = ["image/png","image/jpg","image/jpeg"];
        if(imgType3.indexOf(reg) === -1){
            console.log("不符合")
            return false;
        }else{
            console.log("符合")
        }
    }
    upImg(){
        let imgFile = this.refs.upImg;
        if(imgFile.files[0]){
            let params = new URLSearchParams(); //处理url传参
            params.append("key","value");
            fetch("url",{method:"POST",body:params}).then((res)=>res.json()).then((res)=>{
              if(res.code === 200){
                console.log(res.data)
              }
            })
        }  
    }
     //axios上传头像
    //  axiosUploadHead(){
    //     let oHeadFile=this.refs['headFile'];
    //     if (oHeadFile.files[0]!==undefined){
    //         let formData = new FormData();
    //         formData.append('headfile', oHeadFile.files[0]);
    //         axios({
    //             method: 'post',
    //             url: 'http://vueshop.glbuys.com/api/user/myinfo/formdatahead?token=1ec949a15fb709370f',
    //             data: formData,
    //             onUploadProgress: (progressEvent)=> {   //进度条
    //                 let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
    //                 console.log(percentCompleted);
    //                 this.setState({progress:percentCompleted})
    //             }
    //         }
    //         ).then(res=>{
    //             console.log(res);
    //             if (res.data.code===200){
    //                 this.setState({sHead:'//vueshop.glbuys.com/userfiles/head/'+res.data.data.msbox});
    //             }
    //         })
    //     }
    // }
    render(){
        return(
            <div>
               显示子组件id：{this.props.state.userInfo.uid} 
               显示子组件昵称：{this.props.state.userInfo.name}
               <button type="button" onClick={this.checkType.bind(this)}>验证图片</button>
               <input type="file" accept="image/png" id="imgFile"/>
               <div>
                   <img src="" alt="logo"/>
                   <input type="file" onChange={this.upImg.bind(this)} ref="upImg"/>
               </div>
                {/* <div style={{width:'100px',height:'100px',position:'relative'}}>
                    <img src={this.state.sHead} style={{width:'100%',height:'100%',borderRadius:'100%'}} alt="" />
                    <input type="file" ref="headFile" id="headFile" style={{opacity:0,width:'100%',height:'100%',position:'absolute',left:'0px',top:'0px'}} onChange={this.axiosUploadHead.bind(this)} />
                </div>
                <div style={{width:'200px',height:'25px',border:'1px solid #FF0000'}}>
                    <div style={{width:this.state.progress+'%',height:'100%',background:'#0000FF'}}></div>
                </div> */}
            </div>
        )
    }
}
export default connect((state) =>{
    return{
        state:state
    }
})(Login2);
