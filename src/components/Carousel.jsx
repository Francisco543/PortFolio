import React,{Fragment} from 'react'
import styled from 'styled-components'
import imagen1 from './assets/flower.jpg'
const CarouselDiv = styled.div`
   
    height: 1200px;
    position: absolute;
    margin-top: 3900px;
`;


const Carousel = () => {
    return ( 
            <CarouselDiv>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">      
                        <div className="carousel-item active">
                            <img src={imagen1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
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
        
            </CarouselDiv>
     );
}
 
export default Carousel;