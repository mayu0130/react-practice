import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NewTodoForm } from './index';

const meta = {
  title: 'Component/NewTodoForm',
  component: NewTodoForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    addTodo: fn(),
  },
} satisfies Meta<typeof NewTodoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
