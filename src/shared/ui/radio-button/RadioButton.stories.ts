import type { Meta, StoryObj } from '@storybook/react'
import { RadioButton } from './RadioButton'

const meta: Meta<typeof RadioButton> = {
    title: 'shared/RadioButton',
    component: RadioButton,
    parameters: {
        layout: ['centered']
    },
    argTypes: {
        className: {
            type: 'string',
            description: 'Styles variables for component'
        },
        checked: {
            type: 'boolean',
            description: ''
        }
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof RadioButton>

export const Default: Story = {
    args: {}
}

export const Checked: Story = {
    args: {
        checked: true
    }
}
