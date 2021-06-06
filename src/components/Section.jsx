import React from 'react'
import flecha from './assets/flecha2.png'
import styled from 'styled-components'

const AllContainer = styled.div`

`;

const MainDiv = styled.div`
    position:absolute;
    margin-left: 250px;
    margin-top: 150px;

    @media (max-width: 1441px){
            margin-left:100px ;
            margin-top: 70px ;
        }
`;
const MainFlecha = styled.div`
    margin-top: 300px;
    margin-left: 700px;
    transform: rotate(-140deg);
    width: 500px;
    height: 500px;
    background-image: url(${flecha});

    @media (max-width: 1441px){
           margin-top :150px;
           margin-left: -100px;
           transform: rotate(-140deg)scale(0.5);

           
        }
        @media (max-width: 820px){
            margin-top :170px;
           margin-left: -80px;
           transform: rotate(-140deg)scale(0.5);
            
        }
`;

const Developer = styled.p`
    font-family: 'Geo', sans-serif;
    font-size: 70px;
    color: #ffffff;
    margin-top: -240px;
    margin-left: 1230px;

    @media (max-width: 1441px){
           font-size: 50px;
           margin-top: -320px;
           margin-left: 400px;

           
        }
        @media (max-width: 820px){
            margin-top :-350px;
            margin-left: 350px;
           font-size: 50px;
            
        }
`;



const Section = () => {
    return (  
        
            <MainDiv>
                <MainFlecha className="animate__animated animate__fadeIn animate__delay-3s"></MainFlecha> 
                <Developer className="animate__animated animate__fadeIn animate__flash animate__delay-2s ">Full Stack <br/>Java Developer</Developer>
            </MainDiv>
        
        
    );
}
export default Section;