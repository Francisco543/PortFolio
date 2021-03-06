import React, {Fragment, useState}from 'react';
import styled from 'styled-components'
import Background from './components/Background'
import Nav from './components/Nav'
import Main from './components/Main'
import Proyectos from './components/Proyectos'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

const AppContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top: 0;
  
  `;
function App() {
    const [text, setText] = useState("Mi nombre es Francisco, tengo 20 años, vivo en Buenos Aires, Capital Federal. Programador Java Full Stack, Javascript, React, HTML, CSS")
  return (
    <AppContainer2>
      
    <Nav></Nav>
    <Main></Main>
    <AboutMe></AboutMe>
    <Proyectos></Proyectos>
    <Formulario></Formulario>
    <Footer></Footer>
    <Background></Background>
   
    </AppContainer2>
  );
}
export default App;
