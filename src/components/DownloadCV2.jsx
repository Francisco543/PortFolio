import React from 'react'
import styled from 'styled-components'
import pdf from './download/cv.pdf'
const DownloadButton = styled.button`
    
    cursor: pointer;
    padding:0.35em 1.2em;
    border:0.1em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#130c0c;
    text-align:center;
    transition: all 0.2s;
    margin-right: 150px;

    &:hover{
        opacity: 0.5;
        
    }
    @media (max-width: 1441px){
            margin-right: 50px;
            
        }
`;

const DownloadCV2 = () => {
    return (  
        
                <DownloadButton className="animate__animated animate__fadeIn animate__delay-1s"
                            onClick={(event)=>{ event.preventDefault();window.open(pdf)}}
                    >
                Descargar CV
                </DownloadButton>
        
    );
}
 
export default DownloadCV2;