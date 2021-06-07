import React from 'react'
import styled from 'styled-components'
import flecha from './assets/flecha2.png'


const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    height:650px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 1441px){
            height: 910px;
            
        }
`;
const MainParagraph = styled.p`
    font-size: 80px;
    color: #ffffff;
    font-weight:300;
    font-family: 'Syncopate', sans-serif;
    align-self: flex-start;
    @media (max-width: 1441px){
            font-size: 70px;
            
        }
`;


const MainFlecha = styled.div`
    
    align-self: center;
    transform: rotate(-140deg);
    width: 500px;
    height: 500px;
    
    background-image: url(${flecha});
    &:hover{
        filter: invert(100%)
    }
    @media (max-width: 1441px){
        transform: rotate(-90deg);
            
        }
   
`;

const Developer = styled.p`
    font-family: 'Geo', sans-serif;
    font-size: 70px;
    color: #ffffff;
    align-self: flex-end;
    
    margin-left: 25px;
    @media (max-width: 1441px){
           font-size: 50px;
         
           
        }
        @media (max-width: 820px){
      
           font-size: 50px;
            
        }
`;

const Main = () => {
    return (  
        
            <MainDiv>
                <MainParagraph className="animate__animated animate__fadeInLeft animate__delay-2s">
                    Hello,<br/>Im Francisco
                </MainParagraph> 
                <MainFlecha className="animate__animated animate__fadeIn animate__delay-3s"></MainFlecha> 
                <Developer className="animate__animated animate__fadeIn animate__flash animate__delay-2s ">Full Stack <br/>Java Developer</Developer> 
            </MainDiv>
           
    );
}
 
export default Main;