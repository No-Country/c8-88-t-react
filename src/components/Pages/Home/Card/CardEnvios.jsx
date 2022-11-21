import "./CardEnvios.css"

export const CardEnvios = ({destino, dias}) => {
    return (<>
        <div className="wrapper_card d-flex">
            <div className="img_card">

            </div>
            <div className="datos_card d-flex h-100 flex-column justify-content-between">
                <div className="destino_card p-2">
                    <p>{destino}</p>
                    <p>lorem ipsun</p>
                </div>
                <p className="dias_card p-2" >Hace {dias} días</p>
            </div>
        </div>
    </>)
}