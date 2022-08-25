import { render, screen } from '@testing-library/react';

import Home from './index';

describe(`it should render info correctly`, () => {
  render(<Home />);

  it(`should render main message`, () => {
    expect(screen.getByRole(`link`, { name: `Handy POS!` })).toBeVisible();
  });
});
