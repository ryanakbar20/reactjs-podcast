import axios from 'axios';
import { rootPath } from './Config';

const Delete = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${rootPath}/${path}/${id}`)
        .then((result) => {
            resolve(result.data)
        }, (err) => {
            reject(err);
        })
    }) 
    return promise;
}

export default Delete;