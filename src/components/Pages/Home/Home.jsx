import { Carrusel } from "./Carrusel";
import { FormDataPack } from "./FormDataPack";
import { DestinosBuscados } from "./EnvíosEnCurso/DestinosBuscados/DestinosBuscados";
import "./Home.css"


const Home = () => {


  return (<>
      <div className="wrapper_home">
        <Carrusel />
        <div className="wrapper_form d-flex justify-content-center">
          <FormDataPack />
        </div>
        <div className="wrapper_envios">
          <DestinosBuscados />
        </div>
      </div>
    </>);
};

export default Home;
