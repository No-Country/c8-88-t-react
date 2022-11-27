import React from 'react'
import { Card, Col, FormLabel, FormCheck } from 'react-bootstrap'
import "./CardTravel.css"


function CardTravel({ img, nombre, apellido, valoracion, id, chooseTravel }) {

    return (
        <Col>
            <FormLabel className="labelTravel">
                <FormCheck
                    className="checkbox"
                    type="radio"
                    name="travel"
                    onClick={() =>{chooseTravel(id)}}
                />
                <Card className="cardTravel">
                    <Card.Img variant="top" src={img} className="imgTravel" />
                    <Card.Body>
                        <Card.Title>{nombre} {apellido}</Card.Title>
                        <Card.Text>{valoracion}</Card.Text>
                    </Card.Body>
                </Card>
            </FormLabel>
        </Col>
    )
}

export default CardTravel 
