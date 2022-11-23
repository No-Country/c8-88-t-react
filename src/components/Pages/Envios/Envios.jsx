import React, { useState } from "react"
import { Col, Container, Form, FormCheck, FormControl, FormLabel, Row } from "react-bootstrap"
import ButtonNext from "./ButtonNext"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addEnvios } from "../../../reducers/users";

function Envios() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        alto: "",
        largo: "",
        ancho: "",
        peso: "",
        objeto: ""
    });

    const inputForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEnvios(data));
        navigate(`/ChooseTravel`)
    };

    return (
        <>
            <h1>Enviar</h1>
            <h3>Por favor, cargar el detalle del envío</h3>
            <Form onSubmit={handleSubmit}>
                <Container className="mt-5 bg-secondary">
                    <Row className="mb-3">
                        <Col>
                            <h4>Tamaño y peso del paquete</h4>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <FormLabel column lg="auto">Alto:</FormLabel>
                        <Col xs={1}>
                            <FormControl
                                type="text"
                                name="alto"
                                value={data.alto}
                                onChange={inputForm}
                            />
                        </Col>
                        <FormLabel column lg="auto">Largo:</FormLabel>
                        <Col xs={1}>
                            <FormControl
                                type="text"
                                name="largo"
                                value={data.largo}
                                onChange={inputForm}
                            />
                        </Col>
                        <FormLabel column lg="auto">Ancho:</FormLabel>
                        <Col xs={1}>
                            <FormControl
                                type="text"
                                name="ancho"
                                value={data.ancho}
                                onChange={inputForm}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <FormLabel>Peso:</FormLabel>
                            <FormCheck
                                inline
                                label="Menor a 1kg"
                                name="peso"
                                type="radio"
                                value="menor a 1kg"
                                onChange={inputForm}
                            />
                            <FormCheck
                                inline
                                label="De 1 a 3kg"
                                name="peso"
                                type="radio"
                                value="de 1 a 3kg"
                                onChange={inputForm}
                            /><FormCheck
                                inline
                                label="De 3 a 5kg"
                                name="peso"
                                type="radio"
                                value="de 3 a 5kg"
                                onChange={inputForm}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="mb-3">Tipo de objeto</h4>
                            <FormCheck
                                inline
                                label="Documento"
                                name="objeto"
                                type="radio"
                                value="documento"
                                onChange={inputForm}
                            />
                            <FormCheck
                                inline
                                label="Objeto personal"
                                name="objeto"
                                type="radio"
                                value="objeto personal"
                                onChange={inputForm}
                            /><FormCheck
                                inline
                                label="Indumentaria"
                                name="objeto"
                                type="radio"
                                value="indumentaria"
                                onChange={inputForm}
                            />
                        </Col>
                    </Row>
                </Container>
                <ButtonNext />
            </Form>
        </>
    )
}

export default Envios
