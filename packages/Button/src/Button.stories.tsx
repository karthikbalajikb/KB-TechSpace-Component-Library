import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module).add(
  'Primary Button',
  () => <Button label="Primary Button" />,
  { info: { inline: true } },
);
