import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = (query, page) => {
    const url = `/?q=${query}&page=${page}&key=18060216-54e3ca58d741e1dcf99f0c9a1&image_type=photo&orientation=horizontal&per_page=12`;
    return axios.get(url).then(r => {
        return r.data.hits;
    }).catch(e => {
        console.warn(e);
        return e;
    });
}