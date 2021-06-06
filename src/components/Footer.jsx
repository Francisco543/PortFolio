import React from 'react'
import styled from 'styled-components'
import logoInsta from '../components/assets/logoInsta.png'
import logoWpp from '../components/assets/logoWpp.png'
import logoGit from '../components/assets/logoGit.png'
import '../imagenes.css'

const FooterDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 150px;
    background-color: #1a0f0f;
    margin-top: 3300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 1441px){
            margin-top: 2900px;
            width: 100%;
        }

`;

const FooterElement = styled.div`    
        justify-items:center;
        
`;

const TituloFooter = styled.h1`
    font-family: 'Geo', sans-serif;
    font-size: 70px;
    color: #ffffff;
`;

const Footer = () => {
    return (
        <FooterDiv>
            
            <FooterElement><TituloFooter>Instagram</TituloFooter></FooterElement>
            <FooterElement><TituloFooter>Github</TituloFooter></FooterElement>
            <FooterElement><TituloFooter>Linkedin</TituloFooter></FooterElement>
        </FooterDiv>
       
      );

    }
 
export default Footer;


