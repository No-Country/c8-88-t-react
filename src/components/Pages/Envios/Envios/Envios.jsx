import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardEnvios from './CardEnvios'

function Envios() {
    return (
        <Container>
            <Row className="wrapper_Envios_card">
                <CardEnvios />
            </Row>
        </Container>
    )
}

export default Envios