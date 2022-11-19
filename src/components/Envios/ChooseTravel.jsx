import React from 'react'
import { Container, Row } from "react-bootstrap"
import ButtonNext from './ButtonNext'
import CardTravel from './CardTravel'


function ChooseTravel () {
    return (
        <>
            <h1>Por favor, elije a tu viajero</h1>
            <Container className="mt-5 bg-secondary">
                <Row md="auto" className="justify-content-center">
                    <CardTravel />
                    <CardTravel />
                </Row>
            </Container>
            <ButtonNext to="/OfertTravel"/>
        </>
    )
}

export default ChooseTravel
