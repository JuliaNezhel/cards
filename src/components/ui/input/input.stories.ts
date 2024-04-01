import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input/input'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
