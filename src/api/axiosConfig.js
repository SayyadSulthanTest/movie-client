import axios from 'axios';
let apiUrl = import.meta.env.VITE_API_URL;
export default axios.create({
    // baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io/',
    baseURL: apiUrl,
    // headers: { 'ngrok-skip-browser-waring': 'true' },
    headers: [
        { key: 'Access-Control-Allow-Credentials', value: 'true' },
        { key: 'Access-Control-Allow-Origin', value: '*' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
        {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        },
    ],
});
