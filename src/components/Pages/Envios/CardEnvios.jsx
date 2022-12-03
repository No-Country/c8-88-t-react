import React from 'react'
import { Card, CardImg, Button, Col } from 'react-bootstrap'
import receiving from "../../../assets/envios/receiving.png"
import embalaje from "../../../assets/envios/embalaje.png"
import seguro from "../../../assets/envios/seguro.png"
import { useNavigate } from 'react-router-dom'
import "./CardEnvios.css"

function CardEnvios() {

    const navigate = useNavigate()

    return (<>
        <Col md={4}>
            <Card>
                <CardImg variant="top" src={receiving} />
                <Card.Body>
                    <Card.Title>Nuevo envio</Card.Title>
                    <Card.Text>
                        Cargá los datos de tu envío y esperá a que un viajero acepte tu oferta
                    </Card.Text>
                    <Button onClick={() => navigate(`/`)} >Hacer envío</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card>
                <CardImg variant="top" src={embalaje} />
                <Card.Body>
                    <Card.Title>Embalaje</Card.Title>
                    <Card.Text>
                        Ingresá para ver información acerca de sobres y embalajes
                    </Card.Text>
                    <Button>Conocer más</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card>
                <CardImg variant="top" src={seguro} />
                <Card.Body>
                    <Card.Title>Contratá un seguro</Card.Title>
                    <Card.Text>
                        Podés contratar un servicio para asegurar el paquete
                    </Card.Text>
                    <Button>Contratá</Button>
                </Card.Body>
            </Card>
        </Col>
    </>
    )
}

export default CardEnvios