import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {Bio} from '../data/constants';
import {MenuRounded} from '@mui/icons-material';
import { WbSunnyOutlined, DarkModeOutlined } from '@mui/icons-material';


const Nav = styled.div`
  background-color: ${({ scrollNav, theme }) => 
    scrollNav ? `${theme.card}cc` : 'transparent'};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: 0.3s all ease;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    padding: 0 12px; // Reduce padding on mobile
  }
`;
const NavLogo = styled(LinkR)`
 width: 30%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  font-weight: 700;
    color: ${({theme}) => theme.text_primary};



`;

const NavItems = styled.ul`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
list-style: none;
gap: 32px;  
padding: 0 6px;
@media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    width: auto; // Allow container to shrink
    display: flex; // Keep flex display
  }
`;

const GithubButton = styled.a`
  border: 1.8px solid ${({theme}) => theme.primary};
  color: ${({theme}) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  width: 160px;
  &:hover {
    background: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.text_primary};
  }
  @media screen and (max-width: 768px) {
    display: none; // Hide only the Github button on mobile
  }
`;


const MobileIcon = styled.div`
  height: 100%;
  
  align-items: center;
  color: ${({theme}) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;  
  padding: 12px 40px 24px 40px;
  position: absolute;
  background: ${({theme}) => theme.card_light};
  top: 80px;
  right: 0;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 768px) {
    margin-left: 8px; // Add some spacing from the hamburger menu
  }
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const theme = useTheme();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/'>
          <span style={{ color: theme.primary }}>Himesha Patel</span>
        </NavLogo>
        <MobileIcon>
          <MenuRounded style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <MobileMenu isOpen={isOpen}>
          <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink href="#Projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink href="#education" onClick={() => setIsOpen(false)}>Education</NavLink>
          <GithubButton href={Bio.github} target='_blank' onClick={() => setIsOpen(false)}>
            Github Profile
          </GithubButton>
        </MobileMenu>
        <ButtonContainer>
          <GithubButton href={Bio.github} target='_blank'>Github Profile</GithubButton>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <WbSunnyOutlined /> : <DarkModeOutlined />}
          </ThemeToggle>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};;

export default Navbar
