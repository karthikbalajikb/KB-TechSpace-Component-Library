import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../src/Button';

describe('Button', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Button label="demo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
