import React, { Fragment } from 'react';
import Post from './Post.js';
import axios from 'axios';
import {Button, Card} from 'react-bootstrap';
import Menu from './Menu.js';
import {connect} from 'react-redux';
import API from './services/GlobalAPI.js';

class BlogPost extends React.Component {
    constructor () {
        super();
        this.state = {
            post: [],
            newPost: { 
                id: '',
                title: '',
                body: '',
                userId: 1},
            handleUpdate: false
        }
    }

    handleTitle = (event) => {
        let copyPost = {...this.state.newPost};
        copyPost['title'] = event.target.value;
        if (!this.state.handleUpdate) {
        let times = new Date().getTime();
        copyPost['id'] = times
        }
        
        this.setState({
            newPost: copyPost
        }, () => console.log(this.state.newPost))
    }

    handleBody = (event) => {
        let copyPost = {...this.state.newPost};
        copyPost['body'] = event.target.value;
        this.setState({
            newPost: copyPost
        }, () => console.log(this.state.newPost))
    }

    handleGet = () => {
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        // .then((result) => {
        //     this.setState({
        //         post: result.data
        //     })
        // })
        API.getNewPost().then((result) => {
            this.setState({
                post: result
            })
        })
    }

    handleClearState = () => {
        let copyState = {...this.state.newPost};
        copyState['title'] = '';
        copyState['body'] = ''
        this.setState({
            newPost: copyState
        })
    }

    handleRemove = (data) => {
        API.deletePost(data).then(() => this.handleGet())
        console.log(data)
        // axios.delete('http://localhost:3004/posts/' + data).then(() => this.handleGet() )
    }

    handleNewPost = () => {
        API.post(this.state.newPost).then(() => this.handleGet())
        // axios.post('http://localhost:3004/posts', this.state.newPost)
        // .then(() => this.handleGet())
    }

    handleUpdate = (props) => {
        this.setState({
            newPost: props,
            handleUpdate: true
        }, () => console.log(this.state))
    }

    handleButtonSave = () => {
        if (this.state.handleUpdate) {
            API.put(this.state.newPost.id, this.state.newPost).then(() => {
                this.handleGet()
            })
            console.log(this.state.newPost.id)
            // axios.put('http://localhost:3004/posts/' + this.state.newPost.id, this.state.newPost)
            // .then(() => {this.handleGet()})
        }
        else {
            this.handleNewPost()
        }
        this.handleClearState()
    }

    componentDidMount () {
        this.handleGet()
    }

    handleDetail = (props) => {
        console.log(props);
        this.props.history.push(`/blog-detail/${props}`)
    }

    render () {
        return (
            <Fragment>
                <div>
                    <Menu />
                     <p>BlogPost</p>
                     <p>TOTAL ORDER : {this.props.order}</p>
                    <hr/>
                    <div style={{margin: '15px' }}>
                        <Card style={{width: '400px', padding: '15px'}}>
                        <p htmlFor='title'>Title</p>
                    <input name='title' placeholder='Input Title' type='text' 
                    value={this.state.newPost.title} onChange={this.handleTitle}/>
                    <p htmlFor='body'>Body</p>
                    <textarea name='body' id='body' rows='5' cols='30' 
                    value={this.state.newPost.body} onChange={this.handleBody}/>
                    <Button variant='info' style={{display: 'block'}} onClick={this.handleButtonSave} >Simpan</Button>
                        </Card>
                        </div> 
                    {/* <NewPost handlePostToApi={this.onHandleNewPost} dataPutApi={this.state.newPost} /> */}
                    {this.state.post.map(post => {return <Post key={post.id} update={this.handleUpdate} 
                    data={post} remove={this.handleRemove} detail={this.handleDetail} />})}

                </div>
                
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order : state.totalOrder
    }
}

export default connect(mapStateToProps)(BlogPost);