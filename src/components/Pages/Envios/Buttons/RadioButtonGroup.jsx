import React from 'react'
import { ToggleButton, FormLabel, Col } from 'react-bootstrap'
import './RadioButtons.css'

function RadioButtonGroup({ selectRadio, check }) {


    return (
        <>
            <Col xs={12} sm="auto">
                <FormLabel column sm="auto">Peso</FormLabel>
            </Col>
            <Col xs={12} sm="auto">
                <ToggleButton
                    className="btn-radio"
                    id="1"
                    type="radio"
                    name="peso"
                    value="Menor a 1Kg"
                    onChange={(e) => { selectRadio(e.currentTarget.value) }}
                    checked={"Menor a 1Kg" === check}
                >
                    Menor a 1Kg
                </ToggleButton>
            </Col>
            <Col xs={12} sm="auto">
                <ToggleButton
                    className="btn-radio"
                    id="2"
                    type="radio"
                    name="peso"
                    value="De 1 a 3 Kg"
                    onChange={(e) => { selectRadio(e.currentTarget.value) }}
                    checked={"De 1 a 3 Kg" === check}
                >
                    De 1 a 3 Kg
                </ToggleButton>
            </Col>
            <Col xs={12} sm="auto">
                <ToggleButton
                    className="btn-radio"
                    id="3"
                    type="radio"
                    name="peso"
                    value="De 3 a 5 Kg"
                    onChange={(e) => { selectRadio(e.currentTarget.value) }}
                    checked={"De 3 a 5 Kg" === check}
                >
                    De 3 a 5 Kg
                </ToggleButton>
            </Col>
        </>
    )
}

export default RadioButtonGroup