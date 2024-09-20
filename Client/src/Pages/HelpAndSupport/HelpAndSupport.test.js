import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import HelpAndSupport from './HelpAndSupport';

test('renders Help and Support header', () => {
  render(
    <MemoryRouter>
      <HelpAndSupport />
    </MemoryRouter>
  );
  const headerElement = screen.getByText(/Help and Support/i);
  expect(headerElement).toBeInTheDocument();
});
