import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation and home page', () => {
  render(<App />);
  
  // Check if navigation links are rendered
  const homeNavLink = screen.getByRole('link', { name: /home/i });
  const aboutNavLink = screen.getByRole('link', { name: /about/i });
  const roboticsNavLink = screen.getByRole('link', { name: /^robotics$/i });
  
  expect(homeNavLink).toBeInTheDocument();
  expect(aboutNavLink).toBeInTheDocument();
  expect(roboticsNavLink).toBeInTheDocument();
  
  // Check if home page content is rendered
  const welcomeHeading = screen.getByText(/welcome to our lego robotics team/i);
  expect(welcomeHeading).toBeInTheDocument();
});
