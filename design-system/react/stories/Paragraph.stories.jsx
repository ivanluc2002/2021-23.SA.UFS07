import React from 'react';

import { Paragraph } from '../src/molecules/paragraph/Paragraph';
export default {
    title: 'Example/molecules/Paragraph',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
     
    },
  };
  const Template = (args) => <Paragraph {...args} />;

export const Paragraphprova = Template.bind({});
Paragraphprova.args = {
  label:"siuuuuu",
  testo:"ciao come stai"
  
  
};