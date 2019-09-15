import React from 'react';
import { render } from '@testing-library/react';

import Ribbon from '../src/Ribbon';

describe('Ribbon', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Ribbon title="demo" />);
    expect(asFragment().firstChild).toMatchSnapshot();
    // expect(getByText('demo')).toBeInTheDocument();
  });
});
