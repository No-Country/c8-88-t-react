import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const FormDataPack = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        origen: "",
        destino: "",
        inicio: "",
        final: ""
    });

    const inputForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setData({
            origen: "",
            destino: "",
            inicio: "",
            final: ""
        })
        navigate(`/Envios`)
    };

    return (<>
        <form className="row g-4 w-100" onSubmit={handleSubmit}>
            <div className=" col-10 col-sm-8 mx-auto col-md-6 col-lg-3 ">
                <label className="form-label fw-bold">Origen</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputOrigen"
                    name="origen"
                    value={data.origen}
                    onChange={inputForm}
                />
            </div>
            <div className="col-10 col-sm-8 mx-auto col-md-6 col-lg-3 ">
                <label className="form-label fw-bold">Destino</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputDestino"
                    name="destino"
                    value={data.destino}
                    onChange={inputForm}
                />
            </div>
            <div className="col-10 col-sm-8 mx-auto col-md-6 col-lg-3 ">
                <label className="form-label fw-bold">Fecha Inicio</label>
                <input
                    type="date"
                    className="form-control"
                    id="inputFechaInicial"
                    name="inicio"
                    value={data.inicio}
                    onChange={inputForm}
                />
            </div>
            <div className="col-10 col-sm-8 mx-auto col-md-6 col-lg-3 ">
                <label className="form-label fw-bold">Fecha Final</label>
                <input
                    type="date"
                    className="form-control"
                    id="inputFechaFinal"
                    name="final"
                    value={data.final}
                    onChange={inputForm}
                />
            </div>
            <div className="w-100 d-flex justify-content-end align-items-center flex-nowrap">
                <button className="btn btn-primary me-5 me-md-3">Siguiente</button>
            </div>
        </form>
    </>)
}