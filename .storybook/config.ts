import { configure, addParameters, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

import theme from './theme';

// automatically import all files ending in *.stories.tsx
const req = require.context('../packages', true, /\.stories\.(tsx|mdx)$/);

addDecorator(addReadme);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    theme: theme,
    showPanel: true,
    panelPosition: 'bottom',
  },
});

configure(loadStories, module);
