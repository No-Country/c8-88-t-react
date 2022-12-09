import "./CardEnvios.css"

export const CardEnvios = ({ destino, img, pais }) => {
    return (<>
        <div className="wrapper_card d-flex">
            <div className="img_card">
                <img src={img} alt="" />
            </div>
            <div className="datos_card d-flex h-100 flex-column justify-content-between">
                <div className="destino_card  ps-4  pt-3">
                    <p>{destino}</p>
                    <p>{pais}</p>
                </div>
            </div>
        </div>
    </>)
}