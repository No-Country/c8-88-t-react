import React, { useState } from "react"
import { Col, Container, Form, FormCheck, FormControl, FormLabel, Row } from "react-bootstrap"
import ButtonNext from "./Buttons/ButtonNext"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addEnvios } from "../../../reducers/users";
import RadioButtonGroup from "./Buttons/RadioButtonGroup"
import './Envios.css'

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
            [e.target.name]: e.target.value
        })
    };

    const selectWeight = (value) => {
        setData({
            ...data,
            peso: value
        })
    };
    console.log(data.peso)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEnvios(data));
        navigate(`/ChooseTravel`)
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
                        <h5>Por favor, cargar el detalle del envío</h5>
                    </Col>
                </Row>
            </Container>
            <Form onSubmit={handleSubmit}>
                <Container fluid="sm" className="wrapper_envios_form">
                    <Row className="m-3">
                        <Col>
                            <h5>Tamaño y peso del paquete</h5>
                        </Col>
                    </Row>
                    <Row className="m-3 row_control">
                        <FormLabel column lg="auto">Alto:</FormLabel>
                        <Col xs={2}>
                            <FormControl
                                type="number"
                                name="alto"
                                value={data.alto}
                                onChange={inputForm}
                                placeholder="cm"
                                min="0"
                                required
                            />
                        </Col>
                        <FormLabel column lg="auto">Largo:</FormLabel>
                        <Col xs={2}>
                            <FormControl
                                type="number"
                                name="largo"
                                value={data.largo}
                                onChange={inputForm}
                                placeholder="cm"
                                min="0"
                                required
                            />
                        </Col>
                        <FormLabel column lg="auto">Ancho:</FormLabel>
                        <Col xs={2}>
                            <FormControl
                                type="number"
                                name="ancho"
                                value={data.ancho}
                                onChange={inputForm}
                                placeholder="cm"
                                min="0"
                                required
                            />
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                            <FormLabel>Peso:</FormLabel>
                            <RadioButtonGroup
                                selectRadio={selectWeight}
                                check={data.peso}
                            />
                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                            <h5>Tipo de objeto</h5>
                            <FormCheck
                                inline
                                label="Documento"
                                name="objeto"
                                type="radio"
                                value="documento"
                                onChange={inputForm}
                                reverse
                            />
                            <FormCheck
                                inline
                                label="Objeto personal"
                                name="objeto"
                                type="radio"
                                value="objeto personal"
                                onChange={inputForm}
                                reverse
                            />
                            <FormCheck
                                inline
                                label="Indumentaria"
                                name="objeto"
                                type="radio"
                                value="indumentaria"
                                onChange={inputForm}
                                reverse
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
