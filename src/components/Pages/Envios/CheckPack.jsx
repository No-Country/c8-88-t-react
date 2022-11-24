import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ButtonNext from './ButtonNext';
import { orderTravellers } from '../../../db'



function CheckPack() {

    const navigate = useNavigate()
    const state = useSelector((state) => state.order);
    console.log(state);

    function handleSubmit(e) {
        e.preventDefault()
        orderTravellers(state)
        navigate(`/Seguimiento`);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <h1>Revisa tus datos</h1>
                    <p>Origen: {state.origen}</p>
                    <p>Destino: {state.destino}</p>
                    <p>Inicio: {state.inicio}</p>
                    <p>Final: {state.final}</p>
                    <p>Largo: {state.largo}</p>
                    <p>Alto: {state.alto}</p>
                    <p>Ancho: {state.ancho}</p>
                    <p>Peso: {state.peso}</p>
                    <p>Objeto: {state.objeto}</p>
                    <p>Viajero:{state.travel}</p>
                    <p>Oferta: {state.oferta}</p>
                    <p>Seguro: {state.seguro}</p>
                    <p>Comentarios: {state.comentarios}</p>
                    <ButtonNext />
                </Container>
            </Form>
        </>
    )
}

export default CheckPack