import Get from './Get.js';
import Post from './Post.js';
import Delete from './Delete.js';
import Put from './Put.js';

const getNewPost = () => Get('posts?_sort=id&_order=desc'); 
const post = (data) => Post('posts', data);
const deletePost = (id) => Delete('posts', id)
const put = (id, data) => Put('posts', id, data)

const API = {
    put,
    post,
    getNewPost,
    deletePost
}

export default API;