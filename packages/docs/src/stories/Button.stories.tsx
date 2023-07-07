import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Send' },
} as Meta
export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {}

export const Big: Story = {
  args: { size: 'big' },
}
