import apiConfigs from "@/configs/api.config.js";
const url = apiConfigs.urlApi;
const headers = {
    "Content-Type": "application/json"
  };
export default {
    methods: {
        Login(user,password){
            console.log(url);
            return fetch(url+"/auth/login", {
               method:'POST',
               headers,
               body:JSON.stringify(
                   {
                   "email": user,
                   "password":password
                })
           }).then(function(res){
               let data = res.json();

                console.log(data)

               localStorage.setItem("id",data._id);

               localStorage.setItem("token",data.token);
                
               
            return data;               
           })
        
        },
        GetUserDetail(id){
           fetch(url+"/users/"+id).then(function(res){
               return res.json();
           })

           
       }
    }
}