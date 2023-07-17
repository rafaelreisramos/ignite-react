import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

import { Button, ButtonProps } from '@ignite-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Send' },
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight />
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
