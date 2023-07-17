import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: 'select',
    },
  },
}

export default meta

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading will be `h2` by default. You can add an `as` prop with your custom tag.',
      },
    },
  },
}
