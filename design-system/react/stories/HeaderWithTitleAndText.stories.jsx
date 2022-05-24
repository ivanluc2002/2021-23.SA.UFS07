import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

<<<<<<< HEAD
import { HeaderWithTitleAndText } from '../src/templates/headerWithTitleAndText/headerWithTitleAndText';
=======
<<<<<<< HEAD
import { HeaderWithTitleAndText } from '../src/templates/headerWithTitleAndText/HeaderWithTitleAndText';
=======
import { HeaderWithTitleAndText } from '../src/templates/headerWithTitleAndText/headerWithTitleAndText';
>>>>>>> e4a283e295370b80e09fc03e42abc28f002b5af5
>>>>>>> 566fe5e53bda4d9ce5c01464e7ee73f5327408aa

export default {
  title: 'Example/Templates/HeaderWithTitleAndText',
  component: HeaderWithTitleAndText,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <HeaderWithTitleAndText {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
