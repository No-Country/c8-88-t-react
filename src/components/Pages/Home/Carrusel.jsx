import image1 from "../../../assets/carrusel/image1.png";
import image2 from "../../../assets/carrusel/image2.png";
import image3 from "../../../assets/carrusel/image3.png";

export const Carrusel = () => {
    return (<>
        <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100 h-100" alt="TravelPack tu mejor opción" />
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100 h-100" alt="TravelPack tu mejor opción" />
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100 h-100" alt="TravelPack tu mejor opción" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>)
}