import React from 'react'
import { useSelector } from 'react-redux'

const Seguimiento = () => {
    const state = useSelector((state) => state.order)
    console.log(state)

    return (<>
        <h3>Su paquete fue cargado con exito, proximamente podra verlo aqui.</h3>
    </>)
}

export default Seguimiento
