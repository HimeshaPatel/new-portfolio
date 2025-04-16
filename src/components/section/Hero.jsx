import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants.js'
import Typewriter from 'typewriter-effect'
// Update this line to use the public path
const HeroImg = '/images/HeroImage.jpg'
import HeroBgAnimation from '../HeroBgAnimation/index.jsx'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const Hero = ({
  profile = {
    name: "Himesha Patel",
    roles: ["Front-End Developer", "Web Developer", "UI Designer"],
    description: "Hello! I'm Himesha...",
    image: HeroImg
  },
  animations = {
    enabled: true,
    duration: 0.8,
    delay: 0.2
  },
  typewriter = {
    enabled: true,
    speed: {
      deleteSpeed: 20,
      delay: 40
    }
  },
  resumeButton = {
    text: "Check Resume",
    link: "#",
    visible: true
  },
  layout = {
    imagePosition: 'right',
    maxWidth: '1100px',
    padding: {
      desktop: '80px 30px',
      tablet: '66px 16px',
      mobile: '32px 16px'
    }
  },
  backgroundAnimation = true
}) => {
  const HeroContainer = styled(motion.div)`
    display: flex;
    justify-content: center;    
    position: relative;    
    padding: ${props => props.layout?.padding?.desktop || '80px 30px'};
    z-index: 1;
    color: ${({ theme }) => theme.text_primary};
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    
    @media screen and (max-width: 960px) {
      padding: ${props => props.layout?.padding?.tablet || '66px 16px'};
    }

    @media screen and (max-width: 640px) {
      padding: ${props => props.layout?.padding?.mobile || '32px 16px'};
    }
  `;

  const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    width: 100%;
    max-width: ${layout.maxWidth};
    flex-direction: ${layout.imagePosition === 'left' ? 'row-reverse' : 'row'};
    margin-top: 25px;
    @media screen and (max-width: 960px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  const HeroLeftContainer = styled(motion.div)`
    width: 100%;
    order: 1;
    max-width: 600px;
    @media screen and (max-width: 960px) {
      order: 2;
      display: flex;
      gap: 6px;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }
  `;

  const Title = styled.div`
    font-weight: 700;
    font-size: 46px;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    
    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }

  `;

  const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    
    @media screen and (max-width: 960px) {
        text-align: center;
    }

    @media screen and (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }

  `;

  const Span = styled.div`    
    color: ${({theme}) => theme.primary};
    cursor: pointer; 
  `;


  const HeroRightContainer = styled(motion.div)`
    width: 100%;
    order: 2;
    text-align: end;

    @media screen and (max-width: 960px) {
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 80px;
    }

    @media screen and (max-width: 640px) {
      margin-bottom: 30px;
    }
  `;

  const SubTitle = styled.div`
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 42px;
    color: ${({theme}) => theme.text_primary + 95};
    width: 100%;
    display: block;
    text-align: justify;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    
    @media screen and (max-width: 960px) {
      text-align: center;
      padding: 0 16px;
      max-width: 600px;
      margin: 0 auto 42px auto;
    }

    @media screen and (max-width: 640px) {
      font-size: 16px;
      line-height: 32px;
      padding: 0 8px;
    }
  `;

  const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;

    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;

    &:hover {
      transform: scale(1.05);
      transition: all 0.4s ease-in-out;
      box-shadow:  20px 20px 60px #1F2634,
      filter: brightness(1);
      background: ${({ theme }) => theme.primary}
    }    
    
    
    @media (max-width: 640px) {
      padding: 12px 0;
      font-size: 18px;
    } 
    color: white;
    cursor: pointer;
  `;

  const Img = styled.img`
    border-radius: 50%;
    background-color: ${({theme}) => theme.white};
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border: 3px solid ${({theme}) => theme.primary};
    object-fit: contain;
    

    @media screen and (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
  `;

  // HeroBg styled component removed

  return (
    <div id='about'>
      <HeroContainer
        initial={animations.enabled ? { opacity: 0 } : {}}
        animate={animations.enabled ? { opacity: 1 } : {}}
        transition={animations.enabled ? { duration: animations.duration } : {}}
      >
        {/* HeroBg section removed */}
        
        <HeroInnerContainer>
          <HeroLeftContainer
            initial={animations.enabled ? { x: -100, opacity: 0 } : {}}
            animate={animations.enabled ? { x: 0, opacity: 1 } : {}}
            transition={animations.enabled ? { duration: animations.duration, delay: animations.delay } : {}}
          >
            <Title>Hi, I am {profile.name}</Title>
            <TextLoop>
              I am a 
              <Span>
                {typewriter.enabled ? (
                  <Typewriter options={{
                    autoStart: true,
                    loop: true,
                    deleteSpeed: typewriter.speed.deleteSpeed,
                    delay: typewriter.speed.delay,
                    strings: profile.roles,
                  }} />
                ) : (
                  profile.roles[0]
                )}
              </Span>
            </TextLoop>
            <SubTitle><p>Hello! I'm Himesha, a passionate Frontend Developer and Web Designer with 7+ years of experience. I specialize in creating responsive, user-centric web applications using HTML, CSS, jQuery, WordPress, SEO, Typescript, JavaScript, and frameworks like React and Node.js. I have hands-on experience in building RESTful APIs and server-side applications using Node.js and Express.js. My design skills encompass user research, wireframing, prototyping, and visual design with tools like Figma, Photoshop, and Adobe XD. I strive to blend aesthetics with functionality, ensuring seamless and engaging user experiences. Let's connect and create something amazing together!</p></SubTitle>
            {/* {resumeButton.visible && (
              <ResumeButton href={resumeButton.link}>{resumeButton.text}</ResumeButton>
            )} */}
          </HeroLeftContainer>
          
          <HeroRightContainer
            initial={animations.enabled ? { x: 100, opacity: 0 } : {}}
            animate={animations.enabled ? { x: 0, opacity: 1 } : {}}
            transition={animations.enabled ? { duration: animations.duration, delay: animations.delay } : {}}
          >
            <Tilt>
              <Img src={profile.image} alt={profile.name} />
            </Tilt>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default Hero
