import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

const Podcast = (props) => {
        return (
            <div 
            style={{display: 'inline-block',
                    margin: '18px',
                    textAlign: 'center',
                    textWidth: 'bold'
                }}>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Img src={props.thumbnail}/>
                    </Card.Body>
                </Card>
            </div>
        )
    }

export default Podcast; 