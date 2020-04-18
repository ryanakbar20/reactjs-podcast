import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import UsersLargeCard from './UsersLargeCard.js'

const LargeCard = (props) => {
    return (
        <div className="card">
            <div className="text">
                <p className="title">{props.title1} <span>{props.title2}</span></p>
                <ButtonToolbar>
                    <Button size="sm" variant="primary">See More</Button>
                </ButtonToolbar>
                <div className="clear"></div>
                <p className="subtitle">{props.subtitle}</p>
            </div>
            <hr/>
            <div className="all-users">
                <UsersLargeCard name="Ryan Akbar" passion="Survival" />
                <UsersLargeCard name="Ryan Akbar" passion="Survival" />
                <UsersLargeCard name="Ryan Akbar" passion="Survival" />
                <UsersLargeCard name="Ryan Akbar" passion="Survival" />
                <UsersLargeCard name="Ryan Akbar" passion="Survival" />
            </div>
        </div>
    )
}

export default LargeCard;