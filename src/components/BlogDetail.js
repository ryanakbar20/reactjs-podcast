import React from 'react';
import Axios from 'axios';

class BlogDetail extends React.Component {
    constructor () {
        super();
        this.state = {
            post: {
                title: '',
                body: ''
            }
        }
    }
    componentDidMount () {
        Axios.get(`http://localhost:3004/posts/${this.props.match.params.id}`).then((res) => {
            console.log(res);
            this.setState({
                post: {
                    title: res.data.title,
                    body: res.data.body
                }
            })
            console.log(this.state.post)
        });
    }
    render () {
        return (
            <div>
                <p>BlogDetail</p>
                <hr/>
                <h1>{this.state.post.title}</h1>
                <h2>{this.state.post.body}</h2>
            </div>
        )
    }
}

export default BlogDetail;