import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
    title: 'shared/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            type: 'boolean',
            description: 'checkbox by default'
        }
    }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        checked: false
    }
}

export const Checked: Story = {
    args: {
        checked: true
    }
}
