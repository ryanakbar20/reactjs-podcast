import React, { Fragment } from 'react';
import {Button, Card} from 'react-bootstrap';

class NewPost extends React.Component {
    constructor () {
        super();
        this.state = {
            newPost: {
                id: '',
                title: '',
                body: '',
                userId: 1
            }
        }
    }

    handleTitle = (event) => {
        let times = new Date().getTime();
        let postNew = {...this.state.newPost};
        postNew['id'] = times
        postNew['title'] = event.target.value;
        this.setState({
            newPost: postNew
        })
        
    }

    clearState = () => {
        let copyState = {...this.state.newPost.title};
        copyState['title'] = '';
        copyState['body'] = '';
        this.setState({
            newPost: copyState
        })
    }

    handleBody = (event) => {
        let postNew = {...this.state.newPost};
        postNew['body'] = event.target.value;
        this.setState({
            newPost: postNew
        })
    }

    handleNewPost = () => {
        this.props.handlePostToApi(this.state.newPost);
        this.clearState();
    }

    handlePutApi = () => {
        this.setState({
            newPost: this.props.dataPutApi
        })
    }

    handlePropsPut = () => {
        this.props.handlePutAction(this.handlePutApi);
    }

    render () {
        return (
            <Fragment>
                <div style={{margin: '15px' }}>
                    <Card style={{width: '400px', padding: '15px'}}>
                       <p htmlFor='title'>Title</p>
                <input name='title' placeholder='Input Title' type='text' value={this.state.newPost.title} onChange={this.handleTitle}/>
                <p htmlFor='body'>Body</p>
                <textarea name='body' id='body' rows='5' cols='30' value={this.state.newPost.body} onChange={this.handleBody}/>
                <Button variant='info' style={{display: 'block'}} onClick={this.handleNewPost} >Simpan</Button>
                    </Card>
                    </div> 
            </Fragment>
        )
    }
}

export default NewPost;