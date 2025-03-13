import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {Bio} from '../data/constants';
import {MenuRounded} from '@mui/icons-material';


const Nav = styled.nav`
   background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
   width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
 width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;


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
width: 80%;
height: 100%;
padding: 0 6px;
@media screen and (max-width: 768px) {
    display: none;
}
`

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
  &:hover {
    background: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.text_primary};
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

const MobileMenu = styled.ul `
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: start;
list-style: none;
gap: 16px;  
padding: 12px 40px 24px 40px;
position: absolute;
background: ${({theme}) => theme.card_light + 99};
top: 80px;
right: 0;

transition: all 0.6s ease-in-out;
transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
border-radius: 0 0 20px 20px;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

@media screen and (max-width: 768px) {
    display: none;
}

`;

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
    <NavbarContainer>
        <NavLogo to="/"><a style={{
            color: "white"
        }}>GeekforGeek</a></NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{
            color: "inherit"
          }}/>
        </MobileIcon>
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>          
        </NavItems>

        {isOpen && <MobileMenu isOpen={isOpen}>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">About</NavLink>
           <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">Skills</NavLink>
          <NavLink  onClick={() => setIsOpen(!isOpen)} href="#Experience">Experience</NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">Projects</NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">Education</NavLink>
            <GithubButton href={Bio.github} target='_blank' style={{
              background: theme.primary,
              color: theme.text_primary

            }}>Github Profile</GithubButton>

          </MobileMenu>}

        <ButtonContainer>
            <GithubButton href={Bio.github} target='_blank'>Github Profile</GithubButton>
        </ButtonContainer>
    </NavbarContainer>
    </Nav>
  )
}

export default Navbar