import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Card = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: ${({ styles, theme }) => styles?.cardBackground || theme.card} !important;
    color: ${({ theme }) => theme.text_primary};
    box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
    border: 1px solid ${({ styles, theme }) => styles?.borderColor || theme.border};
    border-radius: 6px;
    padding: 20px;

    &:hover {
      background: ${({ theme }) => theme.card_light} !important;
      transition: all 0.3s ease;
    }
  }
  
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid ${({ styles, theme }) => styles?.borderColor || theme.border};
  }

  &.vertical-timeline-element {
    margin: 0em !important;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
`;

const Body = styled.div`
  width: 100%;
`;

const School = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ styles, theme }) => styles?.titleColor || theme.text_primary};
  margin: 0;
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ styles, theme }) => styles?.textColor || theme.text_secondary};
  margin-top: 4px;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ styles, theme }) => styles?.dateColor || theme.text_secondary};
  margin-top: 4px;
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ styles, theme }) => styles?.gradeColor || theme.text_secondary};
  margin-top: 8px;
`;

const Description = styled.div`
  font-size: 14px;
  color: ${({ styles, theme }) => styles?.descriptionColor || theme.text_secondary};
  margin-top: 8px;
`;

const EducationCard = ({ education, styles }) => {
  return (
    <Card
      styles={styles}
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      iconStyle={{
        background: styles?.iconBackground || 'transparent',
        border: `2px solid ${styles?.borderColor || 'rgba(255, 255, 255, 0.2)'}`,
      }}
    >
      <Top>
        <Image src={education?.img} alt={education?.school} />
        <Body>
          <School styles={styles}>{education?.school}</School>
          <Degree styles={styles}>{education?.degree}</Degree>
          <Date styles={styles}>{education?.date}</Date>
        </Body>
      </Top>
      <Grade styles={styles}>
        <b>Grade:</b> {education?.grade}
      </Grade>
      {education?.desc && (
        <Description styles={styles}>{education.desc}</Description>
      )}
    </Card>
  );
};

export default EducationCard;
