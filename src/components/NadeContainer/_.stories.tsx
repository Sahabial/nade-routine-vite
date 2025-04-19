import type { Meta, StoryObj } from '@storybook/react';

import connectorSrc from './../../assets/maps/mirage/connector-1.png';
import windowSrc from './../../assets/maps/mirage/window-1.png';

import Component from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'NadeContainer',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
export const MirageTerrWindow: Story = {
  args: {
    imgSrc: windowSrc,
  },
};

export const MirageTerrConnector: Story = {
  args: {
    imgSrc: connectorSrc,
  },
};
