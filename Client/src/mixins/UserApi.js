import apiConfigs from "@/configs/api.config.js";
const url = "http://localhost:3300/api/v1";
const headers = {
  "Content-Type": "application/json",
};
export default {
  methods: {
    Create(body) {
      return fetch(url + "/users", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    GetUsersDetail(id) {
      return fetch(url + "/users/id/" + id, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    GetUsers() {
      return fetch(url + "/users/all", {
        method: "GET",
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    EditUser(idx, bodyx) {
      return fetch(url + "/users/idupdate/" + idx, {
        method: "PUT",
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyx),
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    RemoveUser(id) {
      return fetch(url + "/users/idremove/" + id, {
        method: "DELETE",
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },
  },
};