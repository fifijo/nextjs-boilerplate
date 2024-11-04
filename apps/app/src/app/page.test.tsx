// apps/app/src/app/page.test.tsx
import React from "react";
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page'; // Adjust the import path according to your project structure

describe('Page', () => {
  it('renders the card with correct title and href', () => {
    render(<Page />);

    const card = screen.getByRole('heading', { name: /web app/i });
    expect(card).toBeTruthy();
  });
});
