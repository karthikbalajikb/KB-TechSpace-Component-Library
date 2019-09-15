import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Text from '../src/Text';

describe('Text', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Text>demo</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
