import React from 'react'
import styled from 'styled-components'
import pdf from './download/cv.pdf'

const DownloadCVDiv = styled.div`
            
            right:180px;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            flex-direction: row;
            position:absolute;
            width: 20%; 
            margin-top: 120px;
            justify-content: flex-end;
            
       

`;

const DownloadButton = styled.button`
    position: absolute;
    right:180px;
    top: 120px;
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
    
    &:hover{
        opacity: 70%;
    }

    @media (max-width: 1441px){
            margin-top: -80px;
            
        }
        @media (max-width: 820px){
            margin-right: -150px;
            
        }

`;

const DownloadCV = () => {
    return ( 

        
            <DownloadButton className="animate__animated animate__fadeIn animate__delay-1s"
                            onClick={(event)=>{ event.preventDefault();window.open(pdf)}}
                    >
                Descargar CV
            </DownloadButton>
        

     );


    }
 
export default DownloadCV;


