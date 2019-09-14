import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Ribbon from '.';
import RibbonReadme from '../README.md';

const stories = storiesOf('Ribbon', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs).addParameters({
  options: { showPanel: true, panelPosition: 'bottom' },
  readme: {
    // Show readme at the addons panel
    sidebar: RibbonReadme,
    includePropTables: [Ribbon],
  },
});

// Knobs for React props
stories.add('Ribbon', () => <Ribbon title={text('Title', 'Hello KB')} />);
