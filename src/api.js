import axios from "axios";

const api = axios.create({
    baseURL: 'https://carrinhodecontas.herokuapp.com/api/v1/users'
});

export default api;