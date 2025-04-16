import React from "react";
import styled from "styled-components";
import EducationCard from "../cards/EducationCard";
import { createGlobalStyle } from 'styled-components';
import { useTheme } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 20px 80px 20px;
  background: ${props => props.styles?.backgroundColor || 'transparent'};
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
  color: ${props => props.styles?.titleColor || props.theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${props => props.styles?.descriptionColor || props.theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.itemCount === 1 ? '1fr' : 'repeat(2, 1fr)'};
  gap: 30px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.styles?.descriptionColor || props.theme.text_secondary};
  font-size: 18px;
`;

// Add this component
const TimelineStyles = createGlobalStyle`
  .vertical-timeline-element {
    margin: 0em !important;
  }
`;

const Education = ({ 
  education = [], 
  title = "Education",
  description,
  styles = {}
}) => {
  
  const theme = useTheme(); 
  return (
    <Container styles={styles} id="education">
       <TimelineStyles />
      <Wrapper>
        <Title styles={styles}>{title}</Title>
        
        {description && (
          <Desc
            styles={styles}
            style={{
              marginBottom: "40px",
            }}
          >
            {description}
          </Desc>
        )}

        {education.length === 0 ? (
          <EmptyState styles={styles}>
            No education details available
          </EmptyState>
        ) : (
          <GridContainer itemCount={education.length}>
            {education.map((edu, index) => (
              <EducationCard 
                key={`education-${edu.id || index}`} 
                education={edu}
                styles={{
                  cardBackground: theme.card,
                  borderColor: theme.border,
                  titleColor: theme.text_primary,
                  textColor: theme.text_secondary,
                  dateColor: theme.text_secondary,
                  gradeColor: theme.text_secondary,
                  descriptionColor: theme.text_secondary
                }}
              />
            ))}
          </GridContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Education;
