import React, {Fragment, useState}from 'react';
import styled from 'styled-components'
import Logo from './components/Logo'
import WaveFooter from './components/WaveFooter'
import Background from './components/Background'
import Nav from './components/Nav'
import Main from './components/Main'
import Section from './components/Section'
import Proyectos from './components/Proyectos'
import DownloadCV from './components/DownloadCV';
import Programs from './components/Programs'
import AboutMe from './components/AboutMe'
import Descripcion from './components/Descripcion';
import Footer from './components/Footer'
import Formulario from './components/Formulario'

function App() {

    const [text, setText] = useState("Mi nombre es Francisco, tengo 20 años, vivo en Buenos Aires, Capital Federal. Programador Java Full Stack, Javascript, React, HTML, CSS")
  return (
    <Fragment>
      
    <Nav></Nav>
    
    <Main></Main>
    <Section></Section>
    <AboutMe></AboutMe>
    <Descripcion text={text}></Descripcion>
    <Proyectos></Proyectos>
    
    <Background></Background>
    <Formulario></Formulario>
    <Footer></Footer>
    </Fragment>
  );
}

export default App;
