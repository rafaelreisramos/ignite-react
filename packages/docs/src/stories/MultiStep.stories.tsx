import type { Meta, StoryObj } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

const meta: Meta<MultiStepProps> = {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    steps: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export default meta

type Story = StoryObj<MultiStepProps>

export const Primary: Story = {}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
