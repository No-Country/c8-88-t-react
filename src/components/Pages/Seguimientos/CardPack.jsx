import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './CardPack.css'
import valija from '../../../assets/envios/valija.png'

function CardPack({ img, destino, travel, id }) {

    const urlDetail = `/mipaquete/${id}`;

    return (
        <Link to={urlDetail} className="link">
            <Card className="card_pack">
                <Row className="g-0">
                    <Col xs={5}>
                        <Card.Img src={img} />
                    </Col>
                    <Col xs={7}>
                        <Card.Body>
                            <Card.Title>{destino}</Card.Title>
                            <Card.Text> <img src={valija} alt="valija" /> {travel}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Link>
    )
}

export default CardPack