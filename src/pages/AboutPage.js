import React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';

// Temporary placeholders for images
const ABOUT_HERO_BG = 'https://via.placeholder.com/1920x1080?text=About+Us';
const TEAM_MEMBER_IMG = 'https://via.placeholder.com/300x300?text=Team+Member';
const ABOUT_IMG = 'https://via.placeholder.com/600x400?text=About+Us';

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border: 8px solid white;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    order: 2;
  }
`;

const AboutText = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
  
  h3 {
    color: var(--lego-red);
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const Value = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 5px solid ${props => props.color || 'var(--lego-red)'};
  
  h4 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: var(--lego-dark-gray);
    margin: 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const AboutPage = () => {
  return (
    <>
      <Hero
        title="About Our Team"
        subtitle="Learn about our LEGO Robotics team, our mission, and the amazing people behind the bricks"
        bgImage={ABOUT_HERO_BG}
        bgColor="var(--lego-green)"
      />
      
      <Section title="Our Story">
        <AboutContent>
          <AboutText>
            <h3>Building Together Since 2010</h3>
            <p>
              Our LEGO Robotics Team was founded in 2010 with a simple mission: to inspire young minds through the creative and technical aspects of LEGO robotics.
            </p>
            <p>
              What started as a small group of LEGO enthusiasts has grown into a vibrant community of builders, programmers, and innovators. We believe in learning through play and using LEGO as a medium to explore science, technology, engineering, and mathematics (STEM).
            </p>
            <p>
              Over the years, we've participated in numerous competitions, workshops, and community events, sharing our passion for LEGO robotics with others and continuously expanding our skills and knowledge.
            </p>
          </AboutText>
          <AboutImage src={ABOUT_IMG} alt="Team building with LEGO bricks" />
        </AboutContent>
        
        <ValueGrid>
          <Value color="var(--lego-red)">
            <h4>Creativity</h4>
            <p>We encourage thinking outside the box and finding innovative solutions to challenges.</p>
          </Value>
          <Value color="var(--lego-blue)">
            <h4>Collaboration</h4>
            <p>We believe in the power of working together and combining our diverse skills.</p>
          </Value>
          <Value color="var(--lego-yellow)">
            <h4>Learning</h4>
            <p>We're committed to continuous learning and skill development in robotics.</p>
          </Value>
          <Value color="var(--lego-green)">
            <h4>Fun</h4>
            <p>We never forget that building with LEGO is fundamentally about having fun!</p>
          </Value>
        </ValueGrid>
      </Section>
      
      <Section
        title="Meet Our Team"
        description="Get to know the dedicated people who make our LEGO Robotics team special"
        bgColor="#f5f5f5"
      >
        <TeamGrid>
          <FeatureCard
            title="John Brick"
            description="Team Leader & Master Builder with 10 years of LEGO experience"
            image={TEAM_MEMBER_IMG}
            color="var(--lego-red)"
          />
          <FeatureCard
            title="Sarah Blocks"
            description="Lead Programmer & Robotics Specialist, expert in MINDSTORMS EV3"
            image={TEAM_MEMBER_IMG}
            color="var(--lego-blue)"
          />
          <FeatureCard
            title="Mike Builder"
            description="Technical Designer & Competition Strategist with engineering background"
            image={TEAM_MEMBER_IMG}
            color="var(--lego-green)"
          />
          <FeatureCard
            title="Emma Plates"
            description="Community Outreach Coordinator & Junior Builders Mentor"
            image={TEAM_MEMBER_IMG}
            color="var(--lego-yellow)"
          />
        </TeamGrid>
      </Section>
    </>
  );
};

export default AboutPage;