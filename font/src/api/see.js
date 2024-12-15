import axios from './http'

function getallQuestion(){
    var url = "question_admin";
    return axios.get(url);
}
function addQuestion(json)
{
    var url = "question_admin"+"\\"+add;    
    return axios.get(url,json);
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
export default{
    getallQuestion,
    addQuestion,
    SearchcQuestion,
    SearchQuestion
}
