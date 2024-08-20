import axios from 'axios';
let apiUrl = import.meta.env.VITE_API_URL;
export default axios.create({
    // baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io/',
    baseURL: apiUrl,
    // headers: { 'ngrok-skip-browser-waring': 'true' },
});
