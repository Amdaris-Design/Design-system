import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { Props } from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        onClick: {
            action: 'clicked'
        }
    },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    text: 'BUTTON',
    variant: 'primary',
    size: 'md',
    disabled: false,
    showIcon: true,
};






