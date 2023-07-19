import type { Meta, StoryObj } from '@storybook/react'

import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
} from '@rafaelreisramos-ignite-ui/react'

const meta: Meta<TextAreaProps> = {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Suggestions</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export default meta

type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your suggestions here...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
