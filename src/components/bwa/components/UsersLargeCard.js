import React from 'react';
import {Button} from 'react-bootstrap';

const UsersLargeCard = (props) => {
    return (
        <div className="users">
            <img src="./icon_pagoda.png"/>
            <div className="users-profile">
                <p className="name">{props.name}</p>
                <p className="passion">{props.passion}</p>
            </div>
            <Button variant="outline-secondary" size="sm">Profile</Button>
            <div className="clear"></div>
        </div>
    )
}

export default UsersLargeCard;