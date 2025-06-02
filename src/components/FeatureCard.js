import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 8px solid ${props => props.color || 'var(--lego-red)'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: var(--lego-black);
`;

const CardDescription = styled.p`
  color: var(--lego-dark-gray);
  margin-bottom: 1.5rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: ${props => props.button ? 'space-between' : 'flex-end'};
  align-items: center;
`;

const FeatureCard = ({ 
  title, 
  description, 
  image, 
  color, 
  button, 
  footer 
}) => {
  return (
    <CardContainer color={color}>
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {(button || footer) && (
          <CardFooter button={button}>
            {button && (
              <a href={button.link} className={`btn ${button.variant || ''}`}>
                {button.text}
              </a>
            )}
            {footer && <div>{footer}</div>}
          </CardFooter>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default FeatureCard;