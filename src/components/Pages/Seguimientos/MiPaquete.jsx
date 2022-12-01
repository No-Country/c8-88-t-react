import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import firestore from "../../../db/index";
import img from "../../../assets/destinos/miami.png";
import { useNavigate } from "react-router-dom";

const MiPaquete = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState([]);
  const orderCollections = collection(firestore, "orders");
  const getOrder = async () => {
    const data = await getDocs(orderCollections);
    setOrder(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getOrder();
  }, []);

  const handleClick = () => {
    navigate('/seguimiento')
  }

  return (
    <>
    <div className="text-center">
    <h1>Mis envios</h1>
    <h2>Selecciona el envio que quieres rastrear</h2>

    </div>
    <div className="d-flex justify-content-center" >
      <div className="card mb-3" style={{width: '480px'}}>
        <div className="row g-0">
        <div className="col-sm-4" onClick={handleClick} style={{cursor: 'pointer'}}>
                  <img
                    src={img}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
          <div className="col-md-8">
          
            {order.map((orders) => (
              < >
               
                <div className="card-body" >
                  <h5 className="card-title">origen: {orders.origen}</h5>
                  <p className="card-text">destino: {orders.destino}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      traveller: {orders.travel}
                    </small>
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default MiPaquete;
