import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import firestore from "../../../db/index";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rectangle from '../../../assets/loader/Rectangle.gif'
import './Seguimiento.css'
import CardPack from "./CardPack";
import londres from '../../../assets/destinos/londres.png'
import nopack from '../../../assets/envios/nopack.png'


const Seguimiento = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const orderCollections = collection(firestore, "orders");
    const getOrder = async () => {
      const data = await getDocs(orderCollections);
      setOrder(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false)
    };
    getOrder();
  }, []);


  if (order.length === 0) {
    return <>
      {loading ?
        (<Container fluid>
          <Row md="auto" className="justify-content-center">
            <Col>
              <img alt="loader" src={Rectangle} />
            </Col>
          </Row>
        </Container>) :
        (<Container fluid className="wrapper_no_envios">
          <Row md="auto" className="justify-content-center">
            <Col>
              <img src={nopack} alt="sin paquete" />
            </Col>
          </Row>
          <Row md="auto" className="justify-content-center">
            <Col>
              <h3>No tienes ningun envio realizado</h3>
            </Col>
          </Row>
          <Row md="auto" className="justify-content-center">
            <Col>
              <Link className="link" to={"/"}><h5>Pulsa aqui para empezar uno</h5></Link>
            </Col>
          </Row>
        </Container>)
      }
    </>
  }
  return (
    <>
      <Container fluid className="wrapper_card_pack">
        <Row md="auto" className="justify-content-center">
          {order.map((item) => {
            return <CardPack
              key={item.id}
              img={londres}
              destino={item.destino}
              travel={item.travel}
              id={item.id}
            />
          })}
        </Row>
      </Container>
    </>
  );
};

export default Seguimiento;
