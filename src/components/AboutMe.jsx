import React,{useEffect}from 'react'
import styled from 'styled-components'
import '../fonts.css'
import Aos from "aos"
import "aos/dist/aos.css"
import yoImg from './assets/linkedin.jpg'


const ComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    margin-top: 700px;
    @media (max-width: 1441px){
           margin-top: 600px;
            
        }
        @media (max-width: 820px){
            font-size: 60px;
            margin-left: 40px;
            
        }
`;

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 50%;
    margin-top: 1000px;
    @media (max-width: 1441px){
           margin-top: 700px;
            width: 100%;
        }
        

`;
const AboutmeTitulo = styled.h1`
    font-family: 'Mate SC', serif;
    color: #ffffff;
    font-size: 80px;
`;

const ImageDiv = styled.div`
    background-image: url(${yoImg});
    position: absolute;
    height: 300px;
    width: 300px;
    background-size: cover;
    border-radius: 50%;
    margin-top: 500px;

`

const AboutMe = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);

    return (  
        
            <ContainerDiv id="irAboutMe">
            <AboutmeTitulo data-aos="fade-right">About Me</AboutmeTitulo>
            <ImageDiv data-aos="fade-right"></ImageDiv>
            </ContainerDiv>
                
        
        
        
    );
}
 
export default AboutMe;