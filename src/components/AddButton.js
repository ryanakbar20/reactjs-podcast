import React from 'react';
import './AddButton.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ButtonToolbar, Button} from 'react-bootstrap'

const AddButton = (props) => (
    <div style={{
        float: 'right',
        position: 'relative',
        right: '50px'
    }}>
        <ButtonToolbar>
        <Button onClick={props.visibility} variant='success'>+</Button>
        </ButtonToolbar>
    </div>
)

export default AddButton;