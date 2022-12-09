import { CardEnvios } from '../../Card/CardEnvios';
import Londres from "../../../../../assets/destinos/londres.png";
import Madrid from "../../../../../assets/destinos/madrid.png";
import Miami from "../../../../../assets/destinos/miami.png"
export const DestinosBuscados = () => {
    return (<>
        <h5 className="mb-3" >Los destinos más buscados</h5>
        <div className="wrapper_cards d-flex w-100 flex-wrap justify-content-center justify-content-lg-between align-content-center">
            <CardEnvios destino="Londres" img={Londres} pais="Inglaterra" />
            <CardEnvios destino="Madrid" img={Madrid} pais="España" />
            <CardEnvios destino="Miami" img={Miami} pais="Estados Unidos" />
        </div>
    </>)
}
