import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta
export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
