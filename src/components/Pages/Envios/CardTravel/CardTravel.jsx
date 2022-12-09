import React from 'react'
import { Card, Col, FormLabel, FormCheck, Row } from 'react-bootstrap'
import "./CardTravel.css"

function CardTravel({ img, nombre, apellido, chooseTravel, edad, cel, id }) {

    return (
        <Col>
            <FormLabel htmlFor={id}>
                <Card className="card_travel">
                    <Row className="g-0 justify-content-center">
                        <Col xs={5}>
                            <Card.Img src={img} />
                        </Col>
                        <Col xs={7}>
                            <Card.Body>
                                <Card.Title>{nombre} {apellido}</Card.Title>
                                <Card.Text>Edad: {edad}</Card.Text>
                                <FormCheck
                                    required
                                    id={id}
                                    type="radio"
                                    name="travel"
                                    onChange={() => { chooseTravel(nombre, apellido, cel, img) }}
                                />
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </FormLabel>
        </Col >
    )
}

export default CardTravel 
