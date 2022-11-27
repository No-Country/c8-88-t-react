import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ButtonNext from './ButtonNext';
import { orderTravellers } from '../../../db'



function CheckPack() {

    const navigate = useNavigate()
    const state = useSelector((state) => state.order);

    function handleSubmit(e) {
        e.preventDefault()
        orderTravellers(state)
        navigate(`/Seguimiento`);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container className="mt-5 bg-secondary">
                <h1>Dettale del envio</h1>
                    <Row className="g-4">
                        <Col lg={2}>
                            <p>Origen: {state.origen}</p>
                        </Col>
                        <Col lg={2}>
                            <p>Destino: {state.destino}</p>
                        </Col>
                        <Col lg={3}>
                            <p>Viajero:{state.travel}</p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col lg={5}>
                            <p>Medidas: {state.largo}cm x {state.alto}cm x {state.ancho}cm</p>
                        </Col>
                        <Col lg={5}>
                            <p>Oferta: {state.oferta}</p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col lg={2}>
                            <p>Peso: {state.peso}</p>
                        </Col>
                    </Row>
                </Container>
                    <ButtonNext />
            </Form>
        </>
    )
}

export default CheckPack