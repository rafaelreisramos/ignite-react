import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps } from '@ignite-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta
export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
