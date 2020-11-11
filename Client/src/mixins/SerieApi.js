import apiConfigs from "@/configs/api.config.js";
const url = apiConfigs.urlApi;
const headers = {
  "Content-Type": "application/json",
};
export default {
  methods: {
    Create(body) {
      return fetch(url + "/series", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    GetSeriesDetail(id) {
      return fetch(url + "/series/id/" + id, {
        method: "GET",
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    GetSeries() {
      return fetch(url + "/series/all", {
        method: "GET",
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },

    EditSerie(idx, bodyx) {
      return fetch(url + "/series/idupdate/" + idx, {
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

    RemoveSerie(id) {
      return fetch(url + "/series/idremove/" + id, {
        method: "DELETE",
        headers: { "x-access-token": localStorage.getItem("token") },
      }).then(function(res) {
        console.log(res);
        return res.json();
      });
    },
  },
};
