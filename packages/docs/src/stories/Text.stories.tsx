import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni. Dolor laborum fugit labore aliquam. Fuga cumque quos, reprehenderit impedit sint voluptatum quis corporis deserunt, rerum culpa architecto provident nemo.',
  },
} as Meta

export default meta

type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni. Dolor laborum fugit labore aliquam. Fuga cumque quos, reprehenderit impedit sint voluptatum quis corporis deserunt, rerum culpa architecto provident nemo.',
    as: 'strong',
  },
}
