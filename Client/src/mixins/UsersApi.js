import apiConfigs from "@/configs/api.config.js";
export default {
    methods: {
        getFilms() {
           
            const headers = {
                "content-type" : "application/json",
                "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluQGFkbWluLmFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNDE1NDk3NSwiZXhwIjoxNjA0MjQxMzc1fQ.amDwQYvPf6UV2Y34Kre_sQ651yRFC1EsT5en5gBwytk"
            }
            return fetch(`http://localhost:3300/api/v1/series/all/`, {
                "method": "GET",
                headers
            })
            .then(res => res.json());
        },
        // getProduct(id) {
        //     return fetch(`${apiConfigs.apiUrl}${id}`)
        //     .then(res=>res.json())
        // }
    }
}