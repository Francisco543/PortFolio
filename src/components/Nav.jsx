import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import DownloadCV2 from './DownloadCV2'
import '../fonts.css'
import '../nav.css'
const NavContainer = styled.div`
       
`
const SourceContainer = styled.div`
    width: 100%;
    position:fixed;  
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 250px;
    z-index: 100000;
    @media (max-width: 1441px){
           height: 200px;
            
        }
        @media (max-width: 820px){
           height: 150px;
            
        }


`;


const NavItem = styled.a`
   
    color: #ffffff;
    padding-right: 50px;
    font-family: 'Syncopate', sans-serif;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 1441px){
           padding-right: 40px;
           
        }
        @media (max-width: 820px){
           height: 100px;
            
        }

        &:hover{
            font-family: tiza;
            color: black;
        }
`;



const  Nav= () => {

    window.addEventListener("scroll", function(){
        var header = document.getElementById("Nav");
        header.classList.toggle("sticky", window.scrollY)
    })

    return ( 
                <SourceContainer id="Nav">

                <Logo></Logo>
                <NavContainer>
                    <NavItem herf="#irAboutMe" className="animate__animated animate__fadeIn animate__delay-1s">
                        About Me
                    </NavItem>
                    <NavItem className="animate__animated animate__fadeIn animate__delay-1s">
                       Contact
                    </NavItem>   
                    <NavItem href="#irProyectos" className="animate__animated animate__fadeIn animate__delay-1s">
                       Proyectos
                    </NavItem>  
                </NavContainer>

                    <DownloadCV2></DownloadCV2>
                  
                </SourceContainer>  
                 
        
     );
}
 



export default Nav;