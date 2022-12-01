import React from 'react'
import { Card, Col, FormLabel, FormCheck, Row } from 'react-bootstrap'
import "./CardTravel.css"

function CardTravel({ img, nombre, apellido, chooseTravel, edad, checked }) {


    return (
        <Col>
            <FormLabel>
                <FormCheck
                    required
                    type="radio"
                    name="travel"
                    onChange={() => { chooseTravel(nombre, apellido) }}
                />
                <Card className={`${checked ? "select" : "card_travel"}`}>
                    <Row className="g-0 justify-content-center">
                        <Col sm={5}>
                            <Card.Img src={img} />
                        </Col>
                        <Col sm={7}>
                            <Card.Body>
                                <Card.Title>{nombre} {apellido}</Card.Title>
                                <Card.Text>Edad: {edad}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </FormLabel>
        </Col>
    )
}

export default CardTravel 
