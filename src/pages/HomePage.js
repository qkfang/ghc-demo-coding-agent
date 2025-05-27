import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';

// Temporary placeholders for images
const PLACEHOLDER_IMG = 'https://via.placeholder.com/600x400?text=LEGO+Robotics';
const HERO_BG = 'https://via.placeholder.com/1920x1080?text=LEGO+Robotics+Team';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Stat = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 3rem;
    color: var(--lego-red);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.2rem;
    color: var(--lego-dark-gray);
    margin: 0;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--lego-yellow);
  border-radius: 8px;
  margin-top: 4rem;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--lego-black);
  }
  
  p {
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    color: var(--lego-black);
  }
`;

const HomePage = () => {
  return (
    <>
      <Hero
        title="Building the Future, One Brick at a Time"
        subtitle="Join our LEGO Robotics team and explore the exciting world of robotics through creative building and programming"
        bgImage={HERO_BG}
        bgColor="var(--lego-blue)"
        primaryButton={{ text: "Explore Robotics", link: "/robotics" }}
        secondaryButton={{ text: "Learn About Us", link: "/about" }}
      />
      
      <Section
        title="What We Do"
        description="Our team is dedicated to exploring robotics through the creative and versatile world of LEGO building systems."
      >
        <Grid>
          <FeatureCard
            title="LEGO Engineering"
            description="We design and build advanced robotic structures using LEGO Technic and MINDSTORMS systems."
            image={PLACEHOLDER_IMG}
            color="var(--lego-blue)"
            button={{ text: "Learn More", link: "/robotics" }}
          />
          <FeatureCard
            title="Coding & Programming"
            description="Team members learn to program robots using block-based and text-based programming languages."
            image={PLACEHOLDER_IMG}
            color="var(--lego-green)"
            button={{ text: "Learn More", link: "/robotics" }}
          />
          <FeatureCard
            title="Competitions"
            description="We participate in regional and national LEGO robotics competitions to test our skills."
            image={PLACEHOLDER_IMG}
            color="var(--lego-red)"
            button={{ text: "Learn More", link: "/robotics" }}
          />
        </Grid>
      </Section>
      
      <Section
        title="Our Achievements"
        description="We're proud of our team's accomplishments in the world of LEGO robotics."
        bgColor="var(--lego-light-gray)"
      >
        <StatsContainer>
          <Stat>
            <h3>15+</h3>
            <p>Competition Awards</p>
          </Stat>
          <Stat>
            <h3>50+</h3>
            <p>Team Members</p>
          </Stat>
          <Stat>
            <h3>12</h3>
            <p>Years of Experience</p>
          </Stat>
          <Stat>
            <h3>8</h3>
            <p>Robots Built</p>
          </Stat>
        </StatsContainer>
        
        <CTASection>
          <h3>Ready to Join Our Team?</h3>
          <p>
            We're always looking for passionate, creative minds to join our LEGO Robotics team.
            Whether you're experienced with LEGO building or just starting out, there's a place for you here!
          </p>
          <Link to="/about" className="btn btn-primary">
            Join Our Team
          </Link>
        </CTASection>
      </Section>
    </>
  );
};

export default HomePage;