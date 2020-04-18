import axios from 'axios';
import { rootPath } from './Config';

const Put = (path, id, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${rootPath}/${path}/${id}`, data).then((result) => {
            resolve(result)
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}

export default Put;