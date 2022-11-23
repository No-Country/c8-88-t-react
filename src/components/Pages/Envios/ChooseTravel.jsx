import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from "react-bootstrap"
import { getTravellers } from '../../../db'
import { useNavigate } from "react-router-dom"
import ButtonNext from './ButtonNext'
import CardList from './CardList'

function ChooseTravel() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //fecha = fecha introducida en home
    let fecha = true;

    useEffect(() => {
        setLoading(true)
        if (fecha === true) {
            getTravellers().then(response => setData(response))
                .finally(() => setLoading(false));
        } else {
            setLoading(false)
        }
    }, [fecha]);

    const handleSubmit = (e) => {
        e.preventDefault();
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
                                <CardList data={data} />
                            </Row>
                        </Container>
                        <ButtonNext />
                    </Form>
                </>)}
        </>)
}

export default ChooseTravel
