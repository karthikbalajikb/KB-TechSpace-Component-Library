import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
storiesOf('Button', module).add(
  'Primary Button',
  function() {
    return React.createElement(Button, { label: 'Primary Button' });
  },
  { info: { inline: true } },
);
//# sourceMappingURL=Button.stories.js.map
