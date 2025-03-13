
import styled, { ThemeProvider } from 'styled-components'
import {darkTheme} from './utils/Themes'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter} from 'react-router-dom'
import Hero from './components/section/Hero'
import StarsCanvas from './components/canvas/Stars' 

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  width: 100%;
  min-height: 90vh;
  // overflow-x: hidden;
  position: relative;
  z-index: 1;
  // background: transparent;
`;

const MainContent = styled.div`
  position: relative;
  z-index: 2;
`;


function App() {
  

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
         <Body>
         <StarsCanvas /> 
         <MainContent>
        <Navbar />
       
          <Hero />
         </MainContent>
        </Body>
        </BrowserRouter>
        </ThemeProvider>
    </>
  )
}

export default App
