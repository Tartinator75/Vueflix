import apiConfigs from "@/configs/api.config.js";
const url = apiConfigs.urlApi;
const headers = {
  "Content-Type": "application/json",
};
// APPELLE D'API STANDARD DE LOGIN PAR FETCH RETOURNE UN JSON
export default {
  methods: {
    Login(user, password) {
      return fetch(url + "/auth/login", {
        method: "POST",
        headers,
        body: JSON.stringify({
          email: user,
          password: password,
        }),
      }).then(function(res) {
        return res.json();
      });
    },
    GetUserDetail(id) {
      fetch(url + "/users/" + id).then(function(res) {
        return res.json();
      });
    },
  },
};
