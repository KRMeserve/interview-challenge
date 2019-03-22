import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean} from '@storybook/addon-knobs';

import { ListCard } from '../../components';

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);

stories
  .add('with custom themes', () => {
    const theme = select('custom theme', ['light', 'dark'], 'light');
    return <ListCard theme={theme}> Themed </ListCard>
   });
