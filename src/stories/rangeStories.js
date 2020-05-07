import React from 'react';
import { storiesOf } from '@storybook/react';

import Range from '../component/Range';

storiesOf('Range', module)
  .add('with primary', () => <Range label="Primary Range" />)
  .add('with outline', () => <Range
    label="Ouline Range"
    style={{ background: 'transparent', border: '3px solid #fecd43' }}
  />)