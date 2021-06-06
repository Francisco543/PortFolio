import React,{useEffect} from 'react'
import styled from 'styled-components'
import WaveFooter from './WaveFooter'
import img1 from './assets/Proyecto1.jpg'
import "../fonts.css"
import Aos from "aos"
import "aos/dist/aos.css"

const ProyectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    margin-top: 1700px;
    justify-content: center;
    @media (max-width: 1441px){
           margin-top: 1500px;
        }
`;

const ProyectP = styled.p`
    font-size: 100px;
    font-family: 'Mate SC', serif;
    color: #ffffff;
    @media (max-width: 1441px){
           font-size: 80px;
        }  
        @media (max-width: 820px){
           margin-top: 90px;
        } 
`;

const FlexDiv = styled.div`
    position: absolute;
    margin-top: 250px;
    display: flex;
    width: 75%;
    height: 500px;
    opacity: 0.8;
    padding: 20px;
    justify-content: center;
`;
const FlexItem = styled.div`
    display: flex;  
    width: 1000px;
    margin: 30px;
    text-align: center;
    font-size: 30px;
    border-top-left-radius:50px;
    border-top-right-radius: 50px;
    align-content: flex-end;
    background-size: cover;
    background-image : url(${img1}) ;
    background-position: center;
`
const FlexP = styled.p`
    color: #ffffff;
    align-self: center;
    font-size: 20px;
   
`;

const Proyectos = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])
    return ( 
            <ProyectContainer id="irProyectos" data-aos="fade-up">
                <ProyectP>
                    Proyectos
                </ProyectP>
                    <FlexDiv>
                    <FlexItem data-aos="fade-right"> 
                        <WaveFooter/>
                    </FlexItem>
                    <FlexItem data-aos="fade-up">
                        <WaveFooter/>
                    </FlexItem>
                    <FlexItem data-aos="fade-left">
                        <WaveFooter/>
                    </FlexItem>
                    </FlexDiv>
        
            </ProyectContainer>
           
      
     );
}
 
export default Proyectos;