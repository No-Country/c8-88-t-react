import React from 'react'
import { Button, Container, Row } from "react-bootstrap"

function ButtonNext() {
    return (
        <Container className="mt-5">
            <Row md="auto" className="justify-content-end">
                <Button
                    type="submit"
                    variant="secondary"
                    size="lg">
                    Siguiente
                </Button>
            </Row>
        </Container>
    )
}

export default ButtonNext