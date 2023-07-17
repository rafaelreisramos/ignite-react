import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/rafaelreisramos.png',
    alt: 'Rafael Reis Ramos',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export default meta

type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
