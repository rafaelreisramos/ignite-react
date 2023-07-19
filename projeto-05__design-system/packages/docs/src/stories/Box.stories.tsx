import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@rafaelreisramos-ignite-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta
export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
