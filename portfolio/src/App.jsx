
import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/section/Hero';
import StarsCanvas from './components/canvas/Stars';
import Skills from './components/section/Skills';
import Experience from './components/section/Experience';
import Education from './components/section/Education';
import Projects from './components/section/Projects';
import Footer from './components/section/Footer';
import { experiences, education } from './data/constants';

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  background: ${({theme}) => theme.bg === "#FFFFFF" 
    ? theme.gradient
    : theme.bg};
  color: ${({theme}) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

function App() {
  // Initialize darkMode from localStorage or default to true
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  // Save darkMode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Body>
          <StarsCanvas />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <Skills />
          <Experience experiences={experiences} />
          <Projects />
          <Education education={education} description="My education has been a journey of self-discovery and growth. My educational details are as follows." />
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


