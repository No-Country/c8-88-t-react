import React from 'react'
import { Button, Container, Row } from "react-bootstrap"
import './ButtonNext.css'

function ButtonNext() {
    return (
        <Container className="wrapper_button">
            <Row className="justify-content-end">
                <Button
                    className="button_next"
                    type="submit"
                >
                    Siguiente
                </Button>
            </Row>
        </Container>
    )
}

export default ButtonNext