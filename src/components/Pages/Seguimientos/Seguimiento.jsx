import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import firestore from "../../../db/index";
import img from "../../../assets/destinos/madrid.png";
import { useNavigate } from "react-router-dom";
import fondo from "../../../utils/seguimiento2.jpg";
import paquete from "../../../utils/paquete.png";
import tiempo from "../../../utils/tiempo.png";
import viajero from "../../../utils/viajero.png"
import aste from "../../../utils/aste.png"
import flecha from "../../../utils/flecha2.png"

const Seguimiento = () => {
  const navigate = useNavigate();
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
    navigate("/mipaquete");
  };
  return (
    <>
    <div className="text-center">
    <h1>Mis Envios</h1>
    <h2>Detalles del paquete</h2>

    </div>
      {order.map((orders) => (
        <div class="card-group">
          <div class="card">
            <div
              class="card-body"
              style={{
                backgroundImage: `url(${tiempo})`,
                backgroundSize: "15%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom 20px right 10px",
              }}
            >
              <h3 class="card-title text-center">
                De {orders.origen} a {orders.destino}{" "}
              </h3>
              <p></p>
              <h5 class="card-text"> <img src={aste} alt="" /> 29/11/22 07:15 - En espera</h5>
              <p class="card-text"> <img src={flecha} alt="" />
                {" "}
                29/11/22 07:23 - el viajero acepto la oferta
              </p>
              <p></p>
              <h5><img src={aste} alt="" />  02/12/2022 10:33 - En camino</h5>
              <p class="card-text">
                <small class="text-muted"><img src={flecha} alt="" />
                  {" "}

                  02/12/2022 10:50 - tu paquete esta en viaje
                </small>
              </p>
            </div>
          </div>
          <div class="card ">
            <div
              class="card-body"
              style={{
                backgroundImage: `url(${paquete})`,
                backgroundSize: "15%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom 20px right 10px",
              }}
            >
              <h5 class="card-title text-center">Paquete</h5>
              <p class="card-text">Alto: {orders.alto}</p>
              <p class="card-text">Ancho: {orders.ancho}</p>
              <p class="card-text">Largo: {orders.largo}</p>
              <p class="card-text">Peso: {orders.peso}</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body"  style={{
                backgroundImage: `url(${viajero})`,
                backgroundSize: "15%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom 20px right 10px",
              }}>
              <h5 class="card-title text-center">Viajero Elegido</h5>
              <p class="card-text"></p>
              <p class="card-text">
                <small class="text-muted">{orders.travel}</small>
              </p>
              <p>Tel: +541123456789</p>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex flex-row-reverse p-2">
        <button className="btn btn-primary btn-sm"  onClick={handleClick}>Atras</button>
      </div>
    </>
  );
};

export default Seguimiento;
