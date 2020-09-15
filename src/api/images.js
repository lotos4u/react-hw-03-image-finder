import axios from 'axios';
import * as config from '../config.json';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = (query, page) => {
    const url = `/?q=${query}&page=${page}&key=${config.api_key}&image_type=photo&orientation=horizontal&per_page=12`;
    return axios.get(url).then(r => {
        return r.data.hits;
    }).catch(e => {
        console.warn(e);
        return e;
    });
}