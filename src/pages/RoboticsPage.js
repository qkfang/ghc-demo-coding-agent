import React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';

// Temporary placeholders for images
const ROBOTICS_HERO_BG = 'https://via.placeholder.com/1920x1080?text=Robotics';
const ROBOT_IMG = 'https://via.placeholder.com/600x400?text=LEGO+Robot';
const COMPETITION_IMG = 'https://via.placeholder.com/600x400?text=Competition';

const RobotShowcase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  
  &:nth-child(even) {
    direction: rtl;
    
    > div {
      direction: ltr;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    direction: ltr !important;
  }
`;

const RobotImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border: 8px solid white;
`;

const RobotInfo = styled.div`
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
      margin-bottom: 0.75rem;
    }
  }
  
  .specs {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    
    h4 {
      margin-bottom: 0.75rem;
      color: var(--lego-blue);
    }
    
    ul {
      margin-bottom: 0;
    }
  }
`;

const CompetitionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  
  .step-number {
    background-color: var(--lego-yellow);
    color: var(--lego-black);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .step-content {
    h4 {
      margin-bottom: 0.75rem;
      font-size: 1.3rem;
    }
    
    p {
      color: var(--lego-dark-gray);
    }
  }
`;

const RoboticsPage = () => {
  return (
    <>
      <Hero
        title="Our LEGO Robotics Projects"
        subtitle="Explore the amazing robots we've built and competitions we've participated in"
        bgImage={ROBOTICS_HERO_BG}
        bgColor="var(--lego-blue)"
      />
      
      <Section title="Featured Robots">
        <RobotShowcase>
          <RobotImage src={ROBOT_IMG} alt="BlockRunner 3000" />
          <RobotInfo>
            <h3>BlockRunner 3000</h3>
            <p>
              Our flagship robot, the BlockRunner 3000, is designed for speed, precision, and versatility. It features a modular design that allows quick reconfiguration for different competition challenges.
            </p>
            <div className="specs">
              <h4>Technical Specifications:</h4>
              <ul>
                <li>Built with LEGO MINDSTORMS EV3</li>
                <li>Dual motor drive system with differential steering</li>
                <li>Advanced color and distance sensors</li>
                <li>Custom-designed grabber mechanism</li>
                <li>Programmable through both block and text-based coding</li>
              </ul>
            </div>
            <p>
              The BlockRunner 3000 has won several awards in regional competitions, including "Most Innovative Design" and "Fastest Completion Time" in the obstacle course challenge.
            </p>
          </RobotInfo>
        </RobotShowcase>
        
        <RobotShowcase>
          <RobotImage src={ROBOT_IMG} alt="BrickSorter Pro" />
          <RobotInfo>
            <h3>BrickSorter Pro</h3>
            <p>
              The BrickSorter Pro is our specialized robot designed for color recognition and sorting tasks. It can identify different colored LEGO bricks and sort them into separate containers with impressive accuracy.
            </p>
            <div className="specs">
              <h4>Technical Specifications:</h4>
              <ul>
                <li>Built with LEGO MINDSTORMS EV3</li>
                <li>Enhanced color sensor array</li>
                <li>Conveyor belt mechanism</li>
                <li>Multi-bin sorting system</li>
                <li>Custom algorithm for color detection</li>
              </ul>
            </div>
            <p>
              This robot demonstrates advanced programming concepts and real-world applications of robotics in sorting and classification tasks, similar to industrial automation.
            </p>
          </RobotInfo>
        </RobotShowcase>
      </Section>
      
      <Section
        title="Competitions"
        description="Our team regularly participates in LEGO robotics competitions at various levels"
        bgColor="#f5f5f5"
      >
        <CompetitionsGrid>
          <FeatureCard
            title="FIRST LEGO League"
            description="An international competition where teams design, build, and program a robot to compete on a table-top playing field."
            image={COMPETITION_IMG}
            color="var(--lego-red)"
            button={{ text: "Learn More", link: "#" }}
          />
          <FeatureCard
            title="World Robot Olympiad"
            description="A global robotics competition that brings together young people to develop their creativity and problem-solving skills."
            image={COMPETITION_IMG}
            color="var(--lego-blue)"
            button={{ text: "Learn More", link: "#" }}
          />
          <FeatureCard
            title="Local LEGO Robotics Showcase"
            description="An annual event in our community where teams showcase their robots and compete in various challenges."
            image={COMPETITION_IMG}
            color="var(--lego-green)"
            button={{ text: "Learn More", link: "#" }}
          />
        </CompetitionsGrid>
      </Section>
      
      <Section title="Our Building Process">
        <p>
          Building a successful LEGO robot involves several key steps, from initial concept to final testing. 
          Here's our proven process for creating award-winning robots:
        </p>
        
        <ProcessSteps>
          <Step>
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Problem Definition & Brainstorming</h4>
              <p>We start by clearly defining the challenge or problem our robot needs to solve. Then, we brainstorm multiple potential solutions as a team.</p>
            </div>
          </Step>
          
          <Step>
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Design & Prototyping</h4>
              <p>We create initial designs and build quick prototypes to test basic concepts and mechanisms before committing to a full build.</p>
            </div>
          </Step>
          
          <Step>
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Building & Assembly</h4>
              <p>We construct the robot using LEGO MINDSTORMS and Technic parts, focusing on structural integrity and efficient design.</p>
            </div>
          </Step>
          
          <Step>
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Programming</h4>
              <p>We develop the code that will control our robot, implementing sensors, motors, and complex behaviors to accomplish tasks.</p>
            </div>
          </Step>
          
          <Step>
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>Testing & Iteration</h4>
              <p>We rigorously test our robot in conditions similar to competition, making adjustments and improvements based on performance.</p>
            </div>
          </Step>
          
          <Step>
            <div className="step-number">6</div>
            <div className="step-content">
              <h4>Competition & Evaluation</h4>
              <p>We participate in competitions, learn from the experience, and document lessons for future projects.</p>
            </div>
          </Step>
        </ProcessSteps>
      </Section>
    </>
  );
};

export default RoboticsPage;