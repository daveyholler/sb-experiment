import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EuiCardExample } from './EuiCard';

export default {
  title: 'Display/EuiCard',
  component: EuiCardExample,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    footer: { control: 'text' },
  }
}

const Template: ComponentStory<typeof EuiCardExample> = (args) => <EuiCardExample {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Card title',
  description: 'Card description',
  footer: 'Card footer',
};
