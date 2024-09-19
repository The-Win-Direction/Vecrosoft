import React from 'react';
import sum from './sum';
import { render, screen } from '@testing-library/react';
import HelpAndSupport from './Pages/HelpAndSupport/HelpAndSupport';

test("testing", ()=>{
    expect(sum(10,10)).toBe(20)
});

test('renders Help and Support header', () => {
    render(<HelpAndSupport />);
    const headerElement = screen.getByText(/Help and Support/i);
    expect(headerElement).toBeInTheDocument();
  });