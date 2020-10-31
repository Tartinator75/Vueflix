import apiConfigs from "@/configs/api.config.js";
const url = "http://localhost:3300/api/v1";
const headers = {
    "Content-Type": "application/json"
  };
export default {
    methods: {
        Login(user,password){
            return fetch(url+"/auth/login", {
               method:'POST',
               headers,
               body:JSON.stringify(
                   {
                   "email": user,
                   "password":password
                })
           }).then(function(res){
               return res.json();
           })
        },
        GetUserDetail(id){
           fetch(url+"/users/"+id).then(function(res){
               return res.json();
           })
       }
    }
}