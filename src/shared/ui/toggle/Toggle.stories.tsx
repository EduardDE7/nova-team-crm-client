import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
    component: Toggle,
    title: 'shared/Toggle',
    parameters: {
        layout: ['centered']
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            type: 'boolean',
            description: 'check toggle by default'
        },
        className: {
            type: 'string',
            description: 'ClassName for customization component'
        }
    }
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
    args: {}
}

export const Checked: Story = {
    args: {
        checked: true
    }
}
