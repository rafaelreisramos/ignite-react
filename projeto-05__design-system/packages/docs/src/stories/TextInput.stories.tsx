import type { Meta, StoryObj } from '@storybook/react'

import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@rafaelreisramos-ignite-ui/react'

const meta: Meta<TextInputProps> = {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    variant: 'md',
  },
  argTypes: {
    variant: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
  },
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
    placeholder: 'Type you name',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
