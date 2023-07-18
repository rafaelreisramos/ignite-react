import type { Meta, StoryObj } from '@storybook/react'

import {
  Box,
  Text,
  Checkbox,
  CheckboxProps,
} from '@rafaelreisramos-ignite-ui/react'

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta

export default meta

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {}
