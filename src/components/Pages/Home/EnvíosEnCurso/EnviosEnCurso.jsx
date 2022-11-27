import {CardEnvios} from '../Card/CardEnvios';


export const EnviosEnCurso = () => {
    return (<>
        <h5 className="mb-3" >Envíos en curso</h5>
            <div className="wrapper_cards d-flex w-100 flex-wrap">
                <CardEnvios destino="Barcelona" dias={3} pais="España"/>
                <CardEnvios destino="Madrid" dias={30} pais="España" />
            </div>
    </>)
}
