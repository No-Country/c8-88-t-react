import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from "react-bootstrap"
import { getTravellerss } from '../../../db'
import { useNavigate } from "react-router-dom"
import ButtonNext from './Buttons/ButtonNext';
import CardList from './CardTravel/CardList'
import { useDispatch, useSelector } from 'react-redux'
import { addTravel } from '../../../reducers/users';


function ChooseTravel() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataTravel, setDataTravel] = useState({
        travel: ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.order);

    let { destino, origen } = state;

    useEffect(() => {
        setLoading(true)
        getTravellerss(destino, origen).then(response => setData(response))
        .finally(() => setLoading(false))
    }, [destino, origen])

    const inputForm = (id) => {
        setDataTravel({
            ...dataTravel,
            travel: id
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTravel(dataTravel))
        navigate(`/OfertTravel`)
    }

    return (
        <>
            {loading ? (<Container>
                <h1>loading...</h1>
            </Container>) :
                (<>
                    <h1>Por favor, elije a tu viajero</h1>
                    <Form onSubmit={handleSubmit}>
                        <Container className="mt-5 bg-secondary">
                            <Row md="auto" className="justify-content-center">
                                <CardList data={data} travelId={inputForm} />
                            </Row>
                        </Container>
                        <ButtonNext />
                    </Form>
                </>)}
        </>)
}

export default ChooseTravel
