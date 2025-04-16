import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import Tilt from 'react-parallax-tilt';
// import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;
const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;


// 3D Flip animation
// const FlipCard = styled(motion.div)`
//   perspective: 1000px;
// `;


//Bounce and Scale animation

// const bounceVariants = {
//   initial: { scale: 0 },
//   animate: { 
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 20
//     }
//   },
//   hover: { 
//     scale: 1.05,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10
//     }
//   }
// };

//float animation
// const FloatingCard = motion.div;

// const floatAnimation = {
//   animate: {
//     y: [0, -10, 0],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };


//Hover Scale and rotation Animation

// const AnimatedCard = motion.div;


const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "frontend"}
            onClick={() => setToggle("frontend")}
          >
            FRONTEND 
          </ToggleButton>
          <Divider />        
             
          <ToggleButton
            active={toggle === "webdesign"}
            onClick={() => setToggle("webdesign")}
          >
            WEB DESIGN
          </ToggleButton>
          <Divider /> 
          <ToggleButton
            active={toggle === "ui/ux"}
            onClick={() => setToggle("ui/ux")}
          >
            UI/UX DESIGN
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) =>
            <Tilt
                key={project.id}
                tiltMaxAngleX={3} 
                tiltMaxAngleY={3} 
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                gyroscope={true}
              >
            <ProjectCard project={project} />
            </Tilt>
            )}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
             <Tilt
                key={project.id}
                tiltMaxAngleX={3} 
                tiltMaxAngleY={3} 
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                gyroscope={true}
              >
              <ProjectCard project={project} />
              </Tilt>
              
            ))}
        </CardContainer>
      </Wrapper>
    </Container>


    //3D animation
    // <Container>
    //   <CardContainer>
    //     {toggle === "all" &&
    //       projects.map((project) => (
    //         <FlipCard
    //           key={project.id}
    //           whileHover={{
    //             rotateY: 180,
    //             transition: { duration: 0.6 }
    //           }}
    //           style={{ transformStyle: "preserve-3d" }}
    //         >
    //           <ProjectCard project={project} />
    //         </FlipCard>
    //       ))}
    //   </CardContainer>
    // </Container>

    //Bounce and Scale animation
    //  <Container>
    //   <CardContainer>
    //     {toggle === "all" &&
    //       projects.map((project) => (
    //         <motion.div
    //           key={project.id}
    //           variants={bounceVariants}
    //           initial="initial"
    //           animate="animate"
    //           whileHover="hover"
    //         >
    //           <ProjectCard project={project} />
    //         </motion.div>
    //       ))}
    //   </CardContainer>
    // </Container>


    //float animation

  // <Container>
  //     <CardContainer>
  //       {toggle === "all" &&
  //         projects.map((project) => (
  //           <FloatingCard
  //             key={project.id}
  //             initial={{ opacity: 0 }}
  //             animate={["visible", "floating"]}
  //             variants={{
  //               visible: { opacity: 1 },
  //               floating: floatAnimation.animate
  //             }}
  //             whileHover={{ scale: 1.05 }}
  //           >
  //             <ProjectCard project={project} />
  //           </FloatingCard>
  //         ))}
  //     </CardContainer>
  //   </Container>

  // <Container>
  //     <CardContainer>
  //       {toggle === "all" &&
  //         projects.map((project) => (
  //           <AnimatedCard
  //             key={project.id}
  //             whileHover={{ 
  //               scale: 1.05,
  //               rotate: 2,
  //               transition: { duration: 0.3 }
  //             }}
  //             whileTap={{ scale: 0.95 }}
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.5 }}
  //           >
  //             <ProjectCard project={project} />
  //           </AnimatedCard>
  //         ))}
  //     </CardContainer>
  //   </Container>
    
  );
};

export default Projects;