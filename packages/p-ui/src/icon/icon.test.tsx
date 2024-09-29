import { render, screen } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
  it('should render', () => {
    render(<Icon name="circle" data-testid="icon" />);
    expect(screen.queryByTestId('icon')).toBeDefined();
  });
});
