import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://my-tinder-clone-29.herokuapp.com/',
    headers: {
        contentType: 'application/json'
    }
})

export default instance;