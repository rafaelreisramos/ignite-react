import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

import { Button, ButtonProps } from '@rafaelreisramos-ignite-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    children: 'Create New',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
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
