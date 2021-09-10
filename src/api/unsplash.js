import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:"Client-ID QEKkoOiusPrBxkzFMrBzDS_o_DrxJUFbTS3xYsQiVWA"
    }
});