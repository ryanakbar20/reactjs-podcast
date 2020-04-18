import axios from 'axios';
import {rootPath} from './Config';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${rootPath}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Get;