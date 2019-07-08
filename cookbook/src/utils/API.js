import axios from "axios";

const BASEURL = "https://api.edamam.com/search?q=";
const APPID = "&app_id=8b888a07";
const APPKEY = "&app_key=a9b6565744d4ce9f78b6d6fcd6448d54";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APPID + APPKEY);
    }
};