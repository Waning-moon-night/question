import axios from './http'

function getallCatagory(){
    var url = "";
    return axios.get(url);
} 
function getLikequestion(str,catagory_id){
    console.log(catagory_id);
    if(catagory_id){
        console.log('here');
        return axios.post("s",{like_str:str,catagory_id:catagory_id})
    }else{
        console.log('there');
        return axios.post("s",{like_str:str})
    }
    }
function SearchCatagory(aid)
{
    var url = "catagory"+"\\"+aid;
    return axios.get(url);
}
function SearchcQuestion(aid,aic){
    var url = "catagory"+"/"+aid+`/`+aic;
    console.log(url)
    return axios.get(url);
}
function SearchQuestion(aid,aic,aib)
{
    var url ="catagory/"+aid+"\\"+aic+"\\"+aib;    
    return axios.get(url);   
}
function doLogin(phone,pass){
    return axios.post("doLogin",{"contectInfo":phone,"pass":pass});
}
function doRegister(name,phone,pass){
    return axios.post("doRegister",{"name":name,"contectInfo":phone,"pass":pass});
}
export default{
    getallCatagory,
    SearchCatagory,
    SearchcQuestion,
    SearchQuestion,
    getLikequestion,
    doLogin,
    doRegister
}