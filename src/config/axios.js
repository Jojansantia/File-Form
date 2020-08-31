import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://thawing-eyrie-40885.herokuapp.com'
});

export default clienteAxios;