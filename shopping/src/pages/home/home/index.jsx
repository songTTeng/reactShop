import React from 'react';
import  {Route,Switch}  from  'react-router-dom';
import AsyncComponents from '../../../components/async/asyncComponent.js';
import config from '../../../assets/js/conf/config.js';
import "./home.scss";
const IndexComponent=AsyncComponents(()=>import('../index/index.jsx'));
const CartIndex=AsyncComponents(()=>import('../cart/cart.jsx'));
const MyIndex=AsyncComponents(()=>import('../my/my.jsx'));
export default class  HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bHomeStyle:true,
            bCartStyle:false,
            bMyStyle:false
        }
    }
    componentWillMount(){
        this.handleNavStyle(this.props)
    }
    componentDidMount(){
    }
    componentWillReceiveProps(newProps){
        this.handleNavStyle(newProps)
    }
    goPage(pUrl){
        // config.path === / 
      this.props.history.replace(config.path+pUrl);
    }
    handleNavStyle(props){
        switch (props.location.pathname){
            case config.path+"home/index":
                this.setState({
                    bHomeStyle:true,
                    bCartStyle:false,
                    bMyStyle:false
                });
                break;
            case config.path+"home/cart":
                this.setState({
                    bHomeStyle:false,
                    bCartStyle:true,
                    bMyStyle:false
                });
                break;
            case config.path+"home/my":
                this.setState({
                    bHomeStyle:false,
                    bCartStyle:false,
                    bMyStyle:true
                });
                break;
            default:
                break;
        }

    }
    render(){
        return(
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={config.path+"home/index"} component={IndexComponent} ></Route>
                        <Route path={config.path+"home/cart"} component={CartIndex} ></Route>
                        <Route path={config.path+"home/my"} component={MyIndex} ></Route>
                    </Switch>
                </React.Fragment>
                <div className='bottom-nav'>
                    <ul onClick={this.goPage.bind(this,'home/index')}>
                        {this.state.bHomeStyle ? <li className="active1"></li> : <li className="home"></li>}
                        {this.state.bHomeStyle ? <li className="active">首页</li> : <li className="text">首页</li>}
                    </ul>
                    <ul onClick={this.goPage.bind(this,'home/cart')}>
                        {this.state.bCartStyle ? <li className="active2"></li> : <li className="cart"></li>}
                        {this.state.bCartStyle ? <li className="active">购物车</li> : <li className="text">购物车</li>}
                    </ul>
                    <ul onClick={this.goPage.bind(this,'home/my')}>
                        {this.state.bMyStyle ? <li className='active3'></li> : <li className='my'></li>}
                        {this.state.bMyStyle ? <li className='active'>我的</li> : <li className='text'>我的</li>}
                    </ul>
                </div>
            </div>
        );
    }
}