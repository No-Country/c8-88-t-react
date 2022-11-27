import {CardEnvios} from '../../Card/CardEnvios';

export const DestinosBuscados = () => {
    return (<>
        <h5 className="mb-3" >Los destinos más buscados</h5>
        <div className="wrapper_cards d-flex w-100 flex-wrap">
                <CardEnvios destino="Barcelona" dias={3} />
                <CardEnvios destino="Madrid" dias={30} />
            </div>
    </>)
}
