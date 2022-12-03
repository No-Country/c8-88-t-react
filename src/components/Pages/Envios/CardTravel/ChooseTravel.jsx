import React, { useEffect, useState } from 'react'
import { Container, Form, Row, Col } from "react-bootstrap"
import { getTravellers } from '../../../../db'
import { useNavigate } from "react-router-dom"
import Buttons from '../Buttons/Buttons';
import CardList from './CardList'
import { useDispatch, useSelector } from 'react-redux'
import { addTravel } from '../../../../reducers/users';
import "./ChooseTravel.css"
import Rectangle from '../../../../assets/loader/Rectangle.gif'
import icon from '../../../../assets/envios/icon.png'


function ChooseTravel() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataTravel, setDataTravel] = useState({
        travel: "",
        cel: "",
        img: ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.order);

    let { destino, origen } = state;

    useEffect(() => {
        setLoading(true)
        getTravellers(destino, origen).then(response => setData(response))
            .finally(() => setLoading(false))
    }, [destino, origen])

    const inputForm = (nombre, apellido, cel, img) => {
        setDataTravel(currentValue => ({
            ...currentValue,
            travel: `${nombre} ${apellido}`,
            cel: cel,
            img: img
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTravel(dataTravel))
        navigate(`/firstForm`)
    }


    if (data.length === 0) {
        return <>
            {loading ? (<Container fluid>
                <Row md="auto" className="justify-content-center">
                    <Col>
                        <img alt="loader" src={Rectangle} />
                    </Col>
                </Row>
            </Container>) :
                (<Container fluid className="wrapper_no_travel">
                    <Row className="justify-content-center">
                        <Col sm="auto">
                            <img src={icon} alt="icon no viajero" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm="auto">
                            <h3>No se encuentran viajeros disponibles para este envio</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm="auto">
                            <h4>Por favor, ingresa nuevamente en otro momento</h4>
                        </Col>
                    </Row>
                    <Buttons back="/" children="Atrás" />
                </Container>)
            }
        </>
    }

    return (
        <>
            {loading ? (<Container>
                <Row md="auto" className="justify-content-center">
                    <Col>
                        <img alt="loader" src={Rectangle} />
                    </Col>
                </Row>
            </Container>) :
                (<>
                    <Container className="wrapper_title" fluid="sm">
                        <Row>
                            <Col>
                                <h4>Enviar</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Elegir viajero que realice la entrega</h5>
                            </Col>
                        </Row>
                    </Container>
                    <Form onSubmit={handleSubmit}>
                        <Container className="wrapper_choose_travel">
                            <Row md="auto" className="justify-content-center">
                                <CardList
                                    data={data}
                                    travelId={inputForm}
                                />
                            </Row>
                        </Container>
                        <Buttons
                            back="/" children="Atrás" />
                    </Form>
                </>)
            }
        </>
    )
}


export default ChooseTravel
