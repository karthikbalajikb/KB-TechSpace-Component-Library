import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Text from '.';
// import TextReadme from '../README.md';

const stories = storiesOf('Text', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs).addParameters({
  options: { showPanel: true, panelPosition: 'bottom' },
  readme: {
    // Show readme at the addons panel
    // sidebar: TextReadme,
    includePropTables: [Text],
  },
});

// Knobs for React props
stories.add('Standard', () => (
  <Text color={text('color', 'blue')}>{text('Label', 'hello all')}</Text>
));
