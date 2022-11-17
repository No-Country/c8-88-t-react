import React from "react"
import { Button, Col, Container, FormCheck, FormControl, FormLabel, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Envios = () => {
    return (<>
        <h1>Enviar</h1>
        <h3>Por favor, cargar el detalle del envío</h3>
        <Container className="mt-5 bg-secondary">
            <Row className="mb-3">
                <Col>
                    <h4>Tamaño y peso del paquete</h4>
                </Col>
            </Row>
            <Row className="mb-3">
                <FormLabel column lg={1}>Alto:</FormLabel>
                <Col xs={1}>
                    <FormControl
                        type="text"
                    />
                </Col>
                <FormLabel column lg={1}>Largo:</FormLabel>
                <Col xs={1}>
                    <FormControl
                        type="text"
                    />
                </Col>
                <FormLabel column lg={1}>Ancho:</FormLabel>
                <Col xs={1}>
                    <FormControl
                        type="text"
                    />
                </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                    <div key={`inline-radio`}>
                        <span>Peso:</span>
                        <FormCheck
                            inline
                            label="Menor a 1kg"
                            name="group1"
                            type="radio"
                            id="{`inline-radio`-1}"
                        />
                        <FormCheck
                            inline
                            label="De 1 a 3kg"
                            name="group1"
                            type="radio"
                            id="{`inline-radio`-2}"
                        /><FormCheck
                            inline
                            label="De 3 a 5kg"
                            name="group1"
                            type="radio"
                            id="{`inline-radio`-3}"
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="mb-3">Tipo de objeto</h4>
                    <div key={`inline-radio`}>
                        <FormCheck
                            inline
                            label="Documento"
                            name="group1"
                            type="radio"
                            id="{`inline-radio`-1}"
                        />
                        <FormCheck
                            inline
                            label="Objeto personal"
                            name="group1"
                            type="radio"
                            id="{`inline-radio`-2}"
                        /><FormCheck
                            inline
                            label="Indumentaria"
                            name="group1"
                            type="radio"
                            id="{`inline-radio`-3}"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="mt-5">
            <Row>
                <Col className="d-flex justify-content-end">
                    <Link to={"/chooseTravel"}><Button variant="secondary" size="lg">Siguiente</Button></Link>
                </Col>
            </Row>
        </Container>
    </>)
}
