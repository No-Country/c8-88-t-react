import React, { useState } from 'react'
import { Container, FormLabel, Row, Col, FormCheck, FormControl, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Buttons from '../Buttons/Buttons';
import { useDispatch } from 'react-redux'
import { addOfert } from '../../../../reducers/users'


function OfertTravel() {

    const [checked, setChecked] = useState(false)
    const [data, setData] = useState({
        oferta: "",
        seguro: "",
        comentarios: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputForm = (e) => {
        setData(currentValue => ({
            ...currentValue,
            [e.target.name]: e.target.value,
        }))
    };

    const insurance = () => {
        setChecked(!checked)
        setData(currentValue => ({
            ...currentValue,
            seguro: !checked,
        }))
    }

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
                                required
                                type="number"
                                name="oferta"
                                value={data.oferta}
                                onChange={inputForm}
                                placeholder="USD"
                                min="1"
                            />
                        </Col>
                    </Row>
                    <Row xs="auto" className="m-4">
                        <FormCheck
                            label="¿Necesitas seguro?"
                            name="seguro"
                            checked={checked}
                            onChange={() => insurance()}
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
                                style={{ width: '26rem', height: '6rem' }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Buttons back="/firstForm" children="Atrás"/>
            </Form>
        </>
    )
}

export default OfertTravel