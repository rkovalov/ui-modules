import { fireEvent, render, screen } from '@testing-library/react';
// write test
import { Button } from './button';

describe('Button', () => {
  it('should render', () => {
    render(<Button>content</Button>);
    expect(screen.getByText('content')).toBeDefined();
  });

  it('should handle onClick', () => {
    const handlePress = vi.fn();
    render(<Button onPress={handlePress}>content</Button>);
    fireEvent.click(screen.getByText('content'));
    expect(handlePress).toHaveBeenCalled();
  });
});
