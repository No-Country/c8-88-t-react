import React from 'react'
import CardTravel from './CardTravel'

function CardList({ data, travelId }) {

    return (
        <>
            {data.map((item) => {
                return <CardTravel
                    key={item.id}
                    nombre={item.Nombre}
                    apellido={item.Apellido}
                    img={item.img}
                    valoracion={item.Valoracion}
                    id={item.id}
                    chooseTravel={travelId}
                />
            })}
        </>
    )
}

export default CardList