import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--lego-black);
  color: white;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

const FooterTitle = styled.h3`
  color: var(--lego-yellow);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--lego-red);
    border-radius: 3px;
  }
`;

const FooterLink = styled(Link)`
  color: var(--lego-light-gray);
  display: block;
  margin-bottom: 0.7rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--lego-yellow);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--lego-dark-gray);
  color: var(--lego-light-gray);
  font-size: 0.9rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--lego-light-gray);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--lego-yellow);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterTitle>About Us</FooterTitle>
            <p>We are a passionate robotics team focused on innovation, learning, and building with LEGO!</p>
            <SocialIcons>
              <SocialIcon href="#" title="Facebook">📱</SocialIcon>
              <SocialIcon href="#" title="Twitter">🐦</SocialIcon>
              <SocialIcon href="#" title="Instagram">📷</SocialIcon>
              <SocialIcon href="#" title="YouTube">▶️</SocialIcon>
            </SocialIcons>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/robotics">Robotics</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <p>Email: info@legorobotics.example</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Brick Street, LEGO City</p>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          © {new Date().getFullYear()} LEGO Robotics Team. All rights reserved.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;