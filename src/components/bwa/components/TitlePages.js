import React from 'react';
import { Row, Col } from "react-bootstrap";

const TitlePages = (props) => {
    return (
        <div>
            <Row>
                <Col>
                    <p className="title">{props.title}</p>
                    <p className="subtitle">{props.subtitle}</p>
                </Col>
            </Row>
        </div>
    )
}

export default TitlePages;