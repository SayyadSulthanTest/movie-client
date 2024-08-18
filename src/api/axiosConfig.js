import axios from 'axios';

export default axios.create({
    // baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io/',
    baseURL: 'http://127.0.0.1:8080/',
    // headers: { 'ngrok-skip-browser-waring': 'true' },
});
