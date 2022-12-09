import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import check from '../../../../assets/envios/check.png'
import Buttons from '../Buttons/Buttons'
import "./OrderOk.css"

function OrderOk() {
    return (
        <Container fluid className="wrapper_info">
            <Row>
                <Col className="wrapper_text" xs={12}>
                    <h1>¡Listo!</h1>
                </Col>
                <Col className="wrapper_text" xs={12}>
                    <img src={check} alt="check" />
                </Col>
                <Col className="wrapper_text" xs={12}>
                    <h3>Ya enviamos tu oferta al viajero</h3>
                </Col>
                <Col className="wrapper_text" xs={12}>
                    <h5>Te llegará una notificación cuando acepte el envio</h5>
                </Col>
            </Row>
            <Row>
                <Buttons back="/" children="Home" />
            </Row>
        </Container>
    )
}

export default OrderOk