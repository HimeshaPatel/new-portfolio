import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 415px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: ${({ singleButton }) => singleButton ? 'center' : 'space-between'};
  gap: 12px;
  margin-top: auto;
`;

const Button = styled.a`
  text-decoration: none;
  width: 100%;
  text-align: center;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;

const ProjectCard = ({ project }) => {
  const getImagePath = (imagePath) => {
    if (!imagePath) return '';
    
    // For external URLs
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // For local images in public/images
    // Remove any leading './' or '/' or 'images/' from the path
    const cleanPath = imagePath.replace(/^\.?\/?(images\/)?/, '');
    return `/images/${cleanPath}`;
  };

  if (!project) return null;

  return (
    <Card>
      <Image 
        src={getImagePath(project.image)} 
        alt={project.title}
      />
      <Details>
        <Title>{project.title}</Title>
      </Details>
      
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <ButtonGroup singleButton={!project.webapp}>
        {project.github && (
          <Button href={project.github} target="_blank">
            View Code
          </Button>
        )}
        {project.webapp && (
          <Button href={project.webapp} target="_blank">
            Web App
          </Button>
        )}
      </ButtonGroup>
    </Card>
  );
};

export default ProjectCard;
