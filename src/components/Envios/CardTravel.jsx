import React from 'react'
import { Card, Col } from 'react-bootstrap'

function CardTravel({img, nombre, apellido, valoracion}) {
    

    return (
        <Col>
            <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre} {apellido}</Card.Title>
                    <Card.Text>{valoracion}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardTravel 
