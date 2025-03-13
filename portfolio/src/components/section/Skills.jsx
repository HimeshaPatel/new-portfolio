import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants';
import Tilt from 'react-parallax-tilt';

const Container = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;     
    flex-direction: column;
    position: relative;
    z-index: 1;       
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;  
  width: 100%;
  gap: 12px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
   color: ${({theme}) => theme.text_primary};
    @media screen and (max-width: 768px) {
       font-size: 32px;
        margin-top: 12px;
       }
`;

const Desc = styled.div`
font-size: 18px;
    text-align: center;
    font-weight: 600;
   color: ${({theme}) => theme.text_secondary};
    @media screen and (max-width: 768px) {
       font-size: 16px;       
       }

`;

const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 28px;
    gap: 50px;
    justify-content: center;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    backgrund-color: rgba(17, 25, 40, 0.83);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: 0 4px 24px rgba(23, 92, 230, 0.15);
    padding: 18px 36px;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 400px;
        padding: 10px 36px;
        }

    @media screen and (max-width: 500px) {
        width: 100%;
        max-width: 330px;
        padding: 10px 36px;
        }
`;

const SkillTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    color: ${({theme}) => theme.text_secondary};
`;

const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 80};
    border: 1px solid ${({theme}) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
        }
    
    @media screen and (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
        }


`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
        <Wrapper>
            <Title>Skills</Title>
            <Desc>Here are some of my skills</Desc>
            <SkillContainer>
                {skills.map((skill, index) => (
                    <Tilt>
                   <Skill key={`skill-${index}`}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillList>
                            {skill.skills.map((skill, index_x) => (
                                <SkillItem key={`skill-item-${index_x}`}>
                                    <SkillImage src={skill.image} />
                                    {skill.name}
                                </SkillItem>
                            ))}
                        </SkillList>
                   </Skill>
                   </Tilt>
                ))

                }
            </SkillContainer>
        </Wrapper>
    </Container>
  )
}

export default Skills