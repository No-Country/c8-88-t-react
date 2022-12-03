import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { packDetail } from '../../../db/index'
import pack from '../../../assets/envios/pack.png'
import recorrido from '../../../assets/envios/recorrido.png'
import "./MiPaquete.css"


const MiPaquete = () => {

  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    packDetail(id)
      .then(response => setData(response))
  }, [id])


  return (
    <Container>
      <Row className="wrapper_pack_detail">
        <Col md={4} className="first_column">
          <h5>De {data.origen} a {data.destino}</h5>
          <Row>
            <Col xs={1}>
              <img src={recorrido} alt="recorrido" />
            </Col>
            <Col xs="auto">
              <p>En espera</p>
              <p>En camino</p>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="b">
          <h5>Paquete <img src={pack} alt="caja" /></h5>
          <p>Medidas: {data.alto}cm x {data.largo}cm x {data.ancho}cm </p>
          <p>Peso: {data.peso} </p>
        </Col>
        <Col md={4} className="third_clumn">
          <h5>Viajero elegido</h5>
          <p> <img src={data.img} alt="foto viajero" /></p>
          <p>{data.travel}</p>
          <p>+{data.cel}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MiPaquete;
