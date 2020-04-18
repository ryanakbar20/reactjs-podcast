import React, { Component } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import './style.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default class index extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={{span:4, offset:4}} md={{span:2, offset:5}}>
                        <h3 style={{marginTop: '30px', marginBottom: '30px'}}>Tiket Saya</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span:10, offset:1}} md={{span:8, offset:2}}>
                        <Card style={{padding: '70px'}}>
                            <Row>
                                <Col className='d-none d-sm-block' xs md={{span: 6, offset: 0}}>
                                    <img src='./dicoding.png' width='100%' height='100%'/>
                                </Col>
                                <Col xs md={{span: 4, offset: 2}}>
                                    <Form>
                                        <h4>Login Form</h4>
                                        <p>Masuk Untuk Mulai Belajar</p>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control className="input" type="email" placeholder="Enter email"/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control className="input" type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                        </Form.Group>
                                        <Link style={{color: '#fff'}} to='/dashboard'>
                                            <Button variant="primary" type="submit">Masuk</Button>
                                        </Link>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
