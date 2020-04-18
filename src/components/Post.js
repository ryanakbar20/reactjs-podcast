import React from 'react';
import {Card, ButtonToolbar, Button} from 'react-bootstrap'

const Post = (props) => {
    return (
        <div>
            <Card style={{width: '800px', margin: '15px', padding: '15px'}}>
                <ButtonToolbar>
                    <Button variant='success' onClick={() => props.update(props.data)} style={{marginRight: '15px'}}>Update</Button>
                    <Button variant='danger' onClick={() => props.remove(props.data.id)}>Remove</Button>
                </ButtonToolbar>
                <Card.Img src='./logo192.png' style={{width: '150px', height: '150px'}}/>
                        <Card.Title onClick={() => props.detail(props.data.id)}>{props.data.title}</Card.Title>
                        <Card.Text>{props.data.body}</Card.Text>    
            </Card>
        </div>
    )
}

export default Post;