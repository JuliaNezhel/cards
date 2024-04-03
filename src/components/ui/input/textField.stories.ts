import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/input/textField'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const DefaultWithError: Story = {
  args: {
    error: 'd',
    value: 'ggds',
  },
}

export const InputSearch: Story = {
  args: {
    value: 'Input for search',
    variant: 'search',
  },
}

export const InputPassword: Story = {
  args: {
    value: 'ggds',
    variant: 'password',
  },
}
