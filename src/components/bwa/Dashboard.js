import React from 'react';
import './style.css';
import SideLeft from './components/SideLeft';
import {Row, Col, Button} from 'react-bootstrap';
import MediumCard from './components/MediumCard';
import LargeCard from './components/LargeCard';
import UsersLargeCard from './components/UsersLargeCard';
import TitlePages from './components/TitlePages';

export default class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <SideLeft dashboard="inactive" />

                <div className="main">
                    <TitlePages title="My Dashboard" subtitle="Latest report updated this week and on" />

                    <Row>
                        <Col>
                            <div className="medium-card">
                                <MediumCard src="./icon_pagoda.png" title="TOURIST" 
                                subtitle="USERS LIFETIME" data="209" text="Around the earth"/>
                                <MediumCard src="./icon_pagoda.png" title="TOURIST" 
                                subtitle="USERS LIFETIME" data="209" text="Around the earth"/>
                                <MediumCard src="./icon_pagoda.png" title="TOURIST" 
                                subtitle="USERS LIFETIME" data="209" text="Around the earth"/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="large-card">
                                <LargeCard title1="NEWEST" title2="USERS" subtitle="USER THAT SIGN UP NOW DAYS" />
                                <LargeCard title1="NEWEST" title2="USERS" subtitle="USER THAT SIGN UP NOW DAYS" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}