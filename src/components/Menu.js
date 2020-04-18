import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Menu = () => (
        <div>
            <Button style={{margin: '15px'}} variant='success'>
                <Link style={{color: '#fff'}} to='/app'>podcast</Link>
            </Button>
            <Button style={{margin: '15px'}} variant='success'>
                <Link style={{color: '#fff'}} to='/'>Home</Link>
            </Button>
            <Button style={{margin: '15px'}} variant='success'>
                <Link style={{color: '#fff'}} to='/product'>Product</Link>
            </Button>
            <Button style={{margin: '15px'}} variant='success'>
                <Link style={{color: '#fff'}} to='/hooks'>Hooks</Link>
            </Button>
            <Button style={{margin: '15px'}} variant='success'>
                <Link style={{color: '#fff'}} to='/bwa'>Bwa</Link>
            </Button>
        </div>
)

export default Menu;