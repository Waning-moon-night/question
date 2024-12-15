import axios from 'axios';

import qs from 'qs';

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.interceptors.request.use((config)=>{
 let token = localStorage.getItem('token');
 token&&(config.headers.Authorization=token);
 return config;
},err=>{
    return config;
});

axios.interceptors.response.use(response=>{
return response.data;
},err=>{
    let{response}=err;
    if(response){
            switch(response.status){
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;   
            }
    }
    else{
        if(!window.navigator.onLine){
            return;
        }
        return Promise.reject(err);
    }
})
export default axios;