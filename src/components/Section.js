import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 4rem 0;
  background-color: ${props => props.bgColor || 'transparent'};
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.titleColor || 'var(--lego-black)'};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--lego-red);
    border-radius: 4px;
  }
`;

const SectionDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: ${props => props.descColor || 'var(--lego-dark-gray)'};
`;

const SectionContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Section = ({
  id,
  title,
  description,
  bgColor,
  titleColor,
  descColor,
  children
}) => {
  return (
    <SectionContainer id={id} bgColor={bgColor}>
      <div className="container">
        {(title || description) && (
          <SectionHeader>
            {title && <SectionTitle titleColor={titleColor}>{title}</SectionTitle>}
            {description && (
              <SectionDescription descColor={descColor}>
                {description}
              </SectionDescription>
            )}
          </SectionHeader>
        )}
        <SectionContent>{children}</SectionContent>
      </div>
    </SectionContainer>
  );
};

export default Section;