import React,{useEffect, useState}from 'react'
import styled from 'styled-components'
import '../fonts.css'
import Aos from "aos"
import "aos/dist/aos.css"
import yoImg from './assets/linkedin.jpg'
import Descripcion from './Descripcion'



const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 500px;
   
`;
const AboutmeTitulo = styled.h1`
    font-family: 'Mate SC', serif;
    color: #ffffff;
    font-size: 80px;
`;

const ImageDiv = styled.div`
    background-image: url(${yoImg});
    
    height: 300px;
    width: 300px;
    background-size: cover;
    border-radius: 50%;
   

`
const Containerli1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
 const ContainerDescripcion = styled.div`
    width: 50%;
 `;
const AboutMe = () => {
const [text, setText] = useState("Mi nombre es Francisco, tengo 20 años, vivo en Buenos Aires, Capital Federal. Programador Java Full Stack, Javascript, React, HTML, CSS")
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);

    return (  
        
            <ContainerDiv id="irAboutMe">
                <Containerli1>
                    <AboutmeTitulo data-aos="fade-right">About Me</AboutmeTitulo>
                    <ImageDiv data-aos="fade-right"></ImageDiv> 
                </Containerli1>
                <ContainerDescripcion>
                   <Descripcion text={text}></Descripcion> 
                </ContainerDescripcion>
                
            </ContainerDiv>
                
        
        
        
    );
}
 
export default AboutMe;