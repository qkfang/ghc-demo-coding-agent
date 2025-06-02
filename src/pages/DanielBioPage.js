import React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';

// Temporary placeholders for images
const DANIEL_HERO_BG = 'https://via.placeholder.com/1920x1080?text=Daniel+Bio';
const DANIEL_PROFILE_IMG = 'https://via.placeholder.com/400x400?text=Daniel';
const PROJECT_IMG = 'https://via.placeholder.com/300x300?text=Project';

const BioContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileSection = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 8px solid white;
  margin-bottom: 2rem;
`;

const BioDetails = styled.div`
  @media (max-width: 768px) {
    order: 2;
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const StatCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 5px solid ${props => props.color || 'var(--lego-red)'};
  
  .number {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${props => props.color || 'var(--lego-red)'};
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: var(--lego-dark-gray);
    font-weight: 500;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ContactInfo = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid var(--lego-blue);
  margin-top: 2rem;
  
  h4 {
    color: var(--lego-blue);
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 0.5rem;
    color: var(--lego-dark-gray);
  }
`;

const DanielBioPage = () => {
  return (
    <>
      <Hero
        title="Daniel Rodriguez"
        subtitle="Senior Robotics Engineer & LEGO Master Builder"
        bgImage={DANIEL_HERO_BG}
        bgColor="var(--lego-blue)"
      />
      
      <Section title="About Daniel">
        <BioContent>
          <ProfileSection>
            <ProfileImage src={DANIEL_PROFILE_IMG} alt="Daniel Rodriguez" />
            <ContactInfo>
              <h4>Contact Information</h4>
              <p><strong>Role:</strong> Senior Robotics Engineer</p>
              <p><strong>Experience:</strong> 8 years</p>
              <p><strong>Specialization:</strong> Advanced Automation</p>
              <p><strong>Email:</strong> daniel@legorobotics.team</p>
            </ContactInfo>
          </ProfileSection>
          
          <BioDetails>
            <h3>Meet Daniel Rodriguez</h3>
            <p>
              Daniel is our Senior Robotics Engineer and one of the most experienced LEGO builders on our team. 
              With over 8 years of hands-on experience in robotics and automation, Daniel brings a unique combination 
              of technical expertise and creative problem-solving to every project.
            </p>
            <p>
              Starting his journey with LEGO MINDSTORMS in 2016, Daniel quickly distinguished himself through his 
              innovative approach to complex mechanical challenges. His background in mechanical engineering, 
              combined with his passion for LEGO, has made him an invaluable mentor to newer team members.
            </p>
            <p>
              Daniel specializes in advanced automation systems and has led our team to victory in multiple 
              regional robotics competitions. His designs are known for their precision, reliability, and creative use of 
              LEGO Technic components.
            </p>
            
            <h3>Expertise & Skills</h3>
            <ul>
              <li>Advanced LEGO MINDSTORMS EV3 and Robot Inventor programming</li>
              <li>Mechanical engineering and structural design</li>
              <li>Sensor integration and autonomous navigation systems</li>
              <li>Competition strategy and robot optimization</li>
              <li>Team mentorship and technical leadership</li>
              <li>3D modeling and custom part design</li>
            </ul>
          </BioDetails>
        </BioContent>
        
        <StatsGrid>
          <StatCard color="var(--lego-red)">
            <div className="number">25+</div>
            <div className="label">Competitions Won</div>
          </StatCard>
          <StatCard color="var(--lego-blue)">
            <div className="number">50+</div>
            <div className="label">Robots Built</div>
          </StatCard>
          <StatCard color="var(--lego-yellow)">
            <div className="number">15+</div>
            <div className="label">Students Mentored</div>
          </StatCard>
          <StatCard color="var(--lego-green)">
            <div className="number">8</div>
            <div className="label">Years Experience</div>
          </StatCard>
        </StatsGrid>
      </Section>
      
      <Section
        title="Featured Projects"
        description="Some of Daniel's most notable robotics achievements and innovations"
        bgColor="#f5f5f5"
      >
        <ProjectsGrid>
          <FeatureCard
            title="Autonomous Warehouse Robot"
            description="Advanced navigation system with custom sensors for automated inventory management"
            image={PROJECT_IMG}
            color="var(--lego-red)"
          />
          <FeatureCard
            title="Competition Champion Bot"
            description="Award-winning robot design that secured 1st place in the 2023 Regional Championship"
            image={PROJECT_IMG}
            color="var(--lego-blue)"
          />
          <FeatureCard
            title="Educational Training Platform"
            description="Modular robotics system designed for teaching programming fundamentals to beginners"
            image={PROJECT_IMG}
            color="var(--lego-green)"
          />
          <FeatureCard
            title="Smart Home Integration"
            description="LEGO-based home automation system with IoT connectivity and mobile app control"
            image={PROJECT_IMG}
            color="var(--lego-yellow)"
          />
        </ProjectsGrid>
      </Section>
    </>
  );
};

export default DanielBioPage;