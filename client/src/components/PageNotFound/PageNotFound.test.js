import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('PageNotFound component', () => {
  it('renders correctly', () => {
    render(<PageNotFound />);
    const heading = screen.getByRole('heading', { level: 1, name: /404/i });
    expect(heading).toBeInTheDocument();
    const subheading = screen.getByRole('heading', { level: 2, name: /Page Not Found/i });
    expect(subheading).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /Wood Gallery/i });
    expect(link).toBeInTheDocument();
  });
});