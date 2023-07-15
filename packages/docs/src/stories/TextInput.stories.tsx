import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

const meta: Meta<TextInputProps> = {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export default meta

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type you email',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
