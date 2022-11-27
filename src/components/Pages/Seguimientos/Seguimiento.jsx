import React, { useState,  useEffect  } from 'react'
import { getdoc, getDocs, collection, doc } from 'firebase/firestore';
import firestore from '../../../db/index';



const Seguimiento = () => {
    
    const [order , setOrder] = useState([]) 


    const orderCollections = collection(firestore, 'orders')

    const getOrder = async () => {
        const data = await getDocs(orderCollections)
        setOrder(
            data.docs.map((doc)=> ({...doc.data(), id: doc.id}))
        )
    
    }

    useEffect(() => {
        getOrder()
    }, [])
            


        
    return (
        <>
       <div>
        {order.map((orders) => (
           <div>
            <h1 key= {orders.id}>ID Order: {orders.id}</h1>
           <h5>destino: {orders.destino}</h5>
           <h5>inicio: {orders.inicio}</h5>
           <h5>final: {orders.final}</h5>
           <h5>oferta: {orders.oferta}</h5>
           <h5>objeto: {orders.objeto}</h5>
           <h5>seguro:{orders.seguro}</h5>
           </div>
        ))}
       </div>
        
    </>
    )
      
            
        
    
      
       
      


}

export default Seguimiento
