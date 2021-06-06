import React from 'react'
import flecha from './assets/corazon.svg'
import styled from 'styled-components'

const AllContainer = styled.div`

`;

const MainDiv = styled.div`
    position:absolute;
    margin-left: 250px;
    margin-top: 150px;

    @media (max-width: 1441px){
            margin-left:100px ;
            margin-top: 100px ;
        }
`;
const MainParagraph = styled.p`
    font-size: 100px;
    color: #ffffff;
    font-weight:300;
    font-family: 'Syncopate', sans-serif;

    @media (max-width: 1441px){
            font-size: 70px;
            
        }
`;



const Main = () => {
    return (  
        
            <MainDiv>
                <MainParagraph className="animate__animated animate__fadeInLeft animate__delay-2s">
                    Hello,<br/>Im Francisco
                </MainParagraph> 
            </MainDiv>
        
        
    );
}
 
export default Main;