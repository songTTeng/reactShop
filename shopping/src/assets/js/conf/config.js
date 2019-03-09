
//获取本地地址 还是开发地址
let prodUrl="http://vueshop.glbuys.com";
let devUrl="http://vueshop.glbuys.com";
let baseUrl=process.env.NODE_ENV==='development'?devUrl:prodUrl;
export default {
    baseUrl:baseUrl,
    path:"/",
    token:"1ec949a15fb709370f"
}