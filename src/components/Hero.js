import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: ${props => props.bgColor || 'var(--lego-blue)'};
  color: white;
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
    background-size: cover;
    background-position: center;
    opacity: ${props => props.bgImage ? 0.2 : 1};
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15px;
    background: repeating-linear-gradient(
      90deg,
      var(--lego-yellow),
      var(--lego-yellow) 20px,
      var(--lego-red) 20px,
      var(--lego-red) 40px,
      var(--lego-blue) 40px,
      var(--lego-blue) 60px,
      var(--lego-green) 60px,
      var(--lego-green) 80px
    );
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Hero = ({ 
  title, 
  subtitle, 
  bgColor, 
  bgImage, 
  primaryButton, 
  secondaryButton 
}) => {
  return (
    <HeroContainer bgColor={bgColor} bgImage={bgImage}>
      <HeroContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {(primaryButton || secondaryButton) && (
          <ButtonContainer>
            {primaryButton && (
              <a href={primaryButton.link} className="btn btn-primary">
                {primaryButton.text}
              </a>
            )}
            {secondaryButton && (
              <a href={secondaryButton.link} className="btn">
                {secondaryButton.text}
              </a>
            )}
          </ButtonContainer>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;