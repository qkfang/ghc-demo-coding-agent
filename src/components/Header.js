import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--lego-red);
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    color: var(--lego-yellow);
  }
`;

const NavLinks = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    margin-top: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
  }
`;

const NavItem = styled(NavLink)`
  color: white;
  margin-left: 2rem;
  font-weight: 500;
  position: relative;
  
  &:hover, &.active {
    color: var(--lego-yellow);
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--lego-yellow);
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    margin-left: 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledBrick = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: var(--lego-yellow);
  margin-right: 8px;
  border-radius: 2px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 2px;
    width: 11px;
    height: 4px;
    background-color: var(--lego-yellow);
    border-radius: 2px 2px 0 0;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <Logo to="/">
            <StyledBrick />
            LEGO Robotics Team
          </Logo>
          
          <MenuButton onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </MenuButton>
          
          <NavLinks isOpen={isOpen}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/robotics">Robotics</NavItem>
            <NavItem to="/daniel">Daniel</NavItem>
          </NavLinks>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;