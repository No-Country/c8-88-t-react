import React, { useState } from 'react'
import { Container, FormLabel, Row, Col, FormCheck, FormControl, Form } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import { useNavigate } from 'react-router-dom'
import ButtonNext from './ButtonNext'
import { useDispatch, useSelector } from 'react-redux'
import { addOfert } from '../../../reducers/users'
import { orderTravellers } from '../../../db'


function OfertTravel() {

    const [data, setData] = useState({
        seguro: "",
        comentarios: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.order)

    const inputForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addOfert(data))
        orderTravellers(state).then(navigate(`/Seguimiento`));
    };
    return (
        <>
            <h1>Haz una oferta al viajero</h1>
            <Form onSubmit={handleSubmit}>
                <Container className="mt-5 bg-secondary">
                    <Row className="mb-3">
                        <FormLabel column lg="auto">Oferta ofrecida:</FormLabel>
                        <Col>
                            <FormRange />
                        </Col>
                    </Row>
                    <Row xs="auto" className="mb-3 justify-content-start">
                        <FormCheck
                            label="Necesitas seguro"
                            name="seguro"
                            onChange={inputForm}
                            value="true"
                            reverse
                        />
                    </Row>
                    <Row xs="auto">
                        <FormLabel>Datos adicionales:</FormLabel>
                        <Col>
                            <FormControl
                                as="textarea"
                                name="comentarios"
                                value={data.comentarios}
                                onChange={inputForm}
                                style={{ height: '150px', width: '500px' }}
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