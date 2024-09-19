import React from 'react';
import { render, screen } from '@testing-library/react';
import HelpAndSupport from './HelpAndSupport';
// import '@testing-library/jest-dom/extend-expect'; 

describe('HelpAndSupport Component', () => {
  test('renders Help and Support header', () => {
    render(<HelpAndSupport />);
    const headerElement = screen.getByText(/Help and Support/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders Plant Disease Detection section', () => {
    render(<HelpAndSupport />);
    const sectionElement = screen.getByText(/Plant Disease Detection/i);
    expect(sectionElement).toBeInTheDocument();
  });

  test('renders Creating Posts section', () => {
    render(<HelpAndSupport />);
    const sectionElement = screen.getByText(/Creating Posts/i);
    expect(sectionElement).toBeInTheDocument();
  });

  test('renders Additional Features section', () => {
    render(<HelpAndSupport />);
    const sectionElement = screen.getByText(/Additional Features/i);
    expect(sectionElement).toBeInTheDocument();
  });

  test('renders Contact Us section', () => {
    render(<HelpAndSupport />);
    const sectionElement = screen.getByText(/Contact Us/i);
    expect(sectionElement).toBeInTheDocument();
  });
});
