import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from '.';
import ButtonReadme from '../README.md';
var stories = storiesOf('Button', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs).addParameters({
  options: { showPanel: true, panelPosition: 'bottom' },
  readme: {
    // Show readme at the addons panel
    sidebar: ButtonReadme,
    includePropTables: [Button],
  },
});
// Knobs for React props
stories.add('Primary', function() {
  return React.createElement(Button, {
    label: text('Label', 'Priamary button'),
  });
});
//# sourceMappingURL=Button.stories.js.map
