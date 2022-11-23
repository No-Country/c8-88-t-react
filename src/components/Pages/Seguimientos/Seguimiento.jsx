import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Seguimiento = () => {

     const [ date, setDate ] = useState({});
     const { id } = useParams();
    


    useEffect(()=> {
        const queryDb = getFirestore()
        const queryDoc = doc(queryDb, 'orders', 'gpEivyjXmrDgCE7MaJ60')
        getDoc(queryDoc)
            .then(res => setDate({id: res.id, ...res.data()}))
            

    }, [])
    
      
        return (
            <>
            <h1>viajero: {date.viajero}</h1>
            <h2>id seguimiento: {date.id}</h2>
            <h5>destino: {date.destino}</h5>
            <h5>origen: {date.origen}</h5>
            <h5>objeto: {date.objeto}</h5>
            <h5>alto: {date.alto}</h5>
            <h5>ancho: {date.ancho}</h5>
            <h5>largo: {date.largo}</h5>
            <h5>peso: {date.peso}</h5>
            
        </>
        )
          
       
      


}

export default Seguimiento
