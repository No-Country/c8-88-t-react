import React from 'react'
import { Card, Col } from 'react-bootstrap'

function CardTravel() {
    const img = "https://www.designevo.com/res/templates/thumb_small/purple-earth-and-white-airplane.webp"

    return (
        <Col>
            <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Tomas Paoletti</Card.Title>
                    <Card.Text>Valoracion</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardTravel 
