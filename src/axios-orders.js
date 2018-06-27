import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-local.firebaseio.com/'
});

export default instance;