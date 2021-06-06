import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import '../animacion.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Descripcion = ({text}) => {
    const index = useRef(0);
        const [currentText,setCurrentText] = useState('');

        useEffect(()=>{
            setTimeout(()=>{
                setCurrentText((value)=> value +text.charAt(index.current));
                index.current += 1;
            },80);
            return()=> {
                clearTimeout(0)
            };
        },[currentText, text])

    return (  
        
        <div className="contenedor">
        <h1>{currentText}</h1>
        
        </div> 
        
    );
}
 
export default Descripcion;