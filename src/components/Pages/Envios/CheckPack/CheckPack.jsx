import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import { orderTravellers } from '../../../../db'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import mastercard from '../../../../assets/envios/mastercard.png'
import visa from '../../../../assets/envios/visa.png'
import mercado from '../../../../assets/envios/mercado.png'
import pack from '../../../../assets/envios/pack.png'
import './CheckPack.css'



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
            <Container className="wrapper_title" fluid="sm">
                <Row>
                    <Col>
                        <h4>Enviar</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Realiza el pago al viajero</h5>
                    </Col>
                </Row>
            </Container>
            <Form onSubmit={handleSubmit}>
                <Container className="wrapper_envios_form">
                    <Row className="ms-3 mt-3">
                        <h5>Dettale del envio</h5>
                    </Row>
                    <Row className="ms-3 mb-3">
                        <Col lg={4}>
                            <p>Origen: {state.origen}</p>
                        </Col>
                        <Col lg={3}>
                            <p>Destino: {state.destino}</p>
                        </Col>
                        <Col lg="auto">
                            <p>Viajero elegido: {state.travel}</p>
                        </Col>
                    </Row>
                    <Row className="ms-3 mb-3 mt-4">
                        <Col lg={7}>
                            <h5>Paquete</h5>
                            <Row>
                                <Col lg="auto">
                                    <img src={pack} alt="caja" />
                                </Col>
                                <Col lg="auto">
                                    <p>Medidas: {state.largo}cm x {state.alto}cm x {state.ancho}cm</p>
                                    <p>Peso: {state.peso}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5}>
                            <p>Precio: {state.oferta}</p>
                        </Col>
                    </Row>
                </Container>
                <Row className="wrapper_payment">
                    <Col xs="auto">
                        <h5>Medio de pago</h5>
                        <Row>
                            <Col xs="auto" className="wrapper_inputs">
                                <FormCheckInput
                                    id="1"
                                    type="radio"
                                    name="pago"
                                />
                                <FormCheckLabel>Tarjeta de crédito / Débito
                                    <img src={visa} alt="Credit Card" />
                                    <img src={mastercard} alt="Credit Card" />
                                </FormCheckLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="auto">
                                <FormCheckInput
                                    id="2"
                                    type="radio"
                                    name="pago"
                                />
                                <FormCheckLabel>Mercado pago
                                    <img src={mercado} alt="mercado pago" /></FormCheckLabel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Buttons back="/ofertTravel" />
            </Form>
        </>
    )
}

export default CheckPack