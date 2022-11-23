import React, { useState } from 'react'
import { Card, Col, FormLabel, FormCheck } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addTravel } from '../../../reducers/users';
import "./CardTravel.css"



function CardTravel({ img, nombre, apellido, valoracion, id }) {

    const [data, setData] = useState({
        travel: ""
    });
    const dispatch = useDispatch();

    const inputForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
        dispatch(addTravel(data))
    };

    return (
        <Col>
            <FormLabel className="labelTravel">
                <FormCheck
                    className="checkbox"
                    type="radio"
                    name="travel"
                    value={id}
                    onClick={inputForm}
                />
                <Card className="cardTravel">
                    <Card.Img variant="top" src={img} className="imgTravel" />
                    <Card.Body>
                        <Card.Title>{nombre} {apellido}</Card.Title>
                        <Card.Text>{valoracion}</Card.Text>
                    </Card.Body>
                </Card>
            </FormLabel>
        </Col>
    )
}

export default CardTravel 
