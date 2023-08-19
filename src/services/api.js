import axios from "axios";

//28080296/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;