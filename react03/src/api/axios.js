import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params : {
        api_key: '3c017c73a13c1dccd98d979ad172b5ed',
        language : 'ko-KR'
    }
})

export default instance;