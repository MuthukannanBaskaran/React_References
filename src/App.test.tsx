import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import UnitTesting from './components/UnitTesting';

test('renders test', () => {
    render(<UnitTesting />);
    expect(screen.getByText(/Unit Testing/i)).toBeInTheDocument();
})