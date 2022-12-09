import React from 'react'
import { Button, Container, Row } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import './Buttons.css'

function Buttons({ back, children }) {

    const navigate = useNavigate()
    const backUrl = () => navigate(`${back}`)

    return (
        <Container className="wrapper_button">
            <Row className="justify-content-end">
                <Button
                    className="button_back"
                    onClick={() => backUrl()}>
                    {children}
                </Button>
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

export default Buttons