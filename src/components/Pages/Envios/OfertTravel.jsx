import React, { useState } from 'react'
import { Container, FormLabel, Row, Col, FormCheck, FormControl, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ButtonNext from './Buttons/ButtonNext';
import { useDispatch } from 'react-redux'
import { addOfert } from '../../../reducers/users'


function OfertTravel() {

    const [data, setData] = useState({
        oferta: "",
        seguro: "",
        comentarios: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addOfert(data));
        navigate(`/CheckPack`);
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
                        <h5>Haz una oferta al viajero</h5>
                    </Col>
                </Row>
            </Container>
            <Form onSubmit={handleSubmit}>
                <Container className="wrapper_envios_form">
                    <Row className="m-3">
                        <FormLabel column lg="auto">Oferta ofrecida:</FormLabel>
                        <Col xs={2}>
                            <FormControl
                                type="number"
                                name="oferta"
                                value={data.oferta}
                                onChange={inputForm}
                                placeholder="USD"
                            />
                        </Col>
                    </Row>
                    <Row xs="auto" className="m-4">
                        <FormCheck
                            label="¿Necesitas seguro?"
                            name="seguro"
                            onChange={inputForm}
                            value="true"
                            reverse
                        />
                    </Row>
                    <Row xs="auto" className="m-3">
                        <FormLabel>Datos adicionales:</FormLabel>
                        <Col>
                            <FormControl
                                as="textarea"
                                name="comentarios"
                                value={data.comentarios}
                                onChange={inputForm}
                                style={{ width: '26rem', height:'6rem' }}
                            />
                        </Col>
                    </Row>
                </Container>
                <ButtonNext />
            </Form>
        </>
    )
}

export default OfertTravel