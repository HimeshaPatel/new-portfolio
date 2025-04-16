import styled from 'styled-components';

const Card = styled.div`
  // ... other styles
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
`;

const ProjectCard = ({ image, title, description }) => {
  // For Storybook, make sure to use the full path from public directory
  const imagePath = image.startsWith('http') ? image : `/images/${image}`;
  
  return (
    <Card image={imagePath}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ProjectCard;