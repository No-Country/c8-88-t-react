import React from 'react'
import { Container, FormLabel, Row, Col, FormCheck, FormControl } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import ButtonNext from './ButtonNext'


function OfertTravel() {
    return (
        <>
            <h1>Haz una oferta al viajero</h1>
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
                        reverse
                    />
                </Row>
                <Row xs="auto">
                    <FormLabel>Datos adicionales:</FormLabel>
                    <Col>
                        <FormControl
                            as="textarea"
                            style={{ height: '150px', width: '500px' }}
                        />
                    </Col>
                </Row>
            </Container>
            
       <ButtonNext  />
       
        </>
    )
}

export default OfertTravel