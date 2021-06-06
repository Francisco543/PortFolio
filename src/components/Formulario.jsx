import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import Aos from "aos"
import "aos/dist/aos.css"
import '../Formulario.css'
const FormularioDiv = styled.form`
        width: 100%;
        position: absolute;
        margin-top: 2700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        @media (max-width: 1441px){
            margin-top: 2350px;
            
        }
       
    `;

const FormularioDivItem = styled.div`
      width: 50%;

`;


const TituloFormuladio = styled.h1`
    font-size: 100px;
    font-family: 'Mate SC', serif;
    color: #ffffff;

`;

    function enviarEmail(e){
        e.preventDefault();
        emailjs.sendForm('gmailPortfolio', 'template_wwnph2t', e.target, 'user_nT40zrToC43ymio91MwmK')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    }


const Formulario = () => {
    return ( 
        <FormularioDiv id= "irContacto" onSubmit={enviarEmail} data-aos="fade-up">
            <TituloFormuladio >Contactame</TituloFormuladio>
              <FormularioDivItem className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" name="name"></input>
              </FormularioDivItem>
              <FormularioDivItem className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"></input>
              </FormularioDivItem>
              <FormularioDivItem className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="mesagge"></textarea>
              </FormularioDivItem>
              <button type="submit" class="btn btn-primary">Submit</button>
        </FormularioDiv>
     );
}
 
export default Formulario;