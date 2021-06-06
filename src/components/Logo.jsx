import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"

const Nombre = styled.h1`   
    color:#ffffff;
    font-family: 'Cinzel', serif;
    font-size: 100px;
    margin-left: 150px;

    @media (max-width: 1441px){
           font-size: 80px;
           margin-left: 100px;
            
        }
        @media (max-width: 820px){
            font-size: 60px;
            margin-left: 40px;
            
        }
`;


const Logo = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);

    return( 
        
                <Nombre data-aos="fade-right">
                    FP
                </Nombre>
               
    );


}

 
export default Logo;