import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './Label'

const meta: Meta<typeof Label> = {
    title: 'shared/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        isError: {
            type: 'boolean',
            description: 'is error'
        },
        htmlFor: {
            type: 'string',
            description: 'htmlFor'
        },
        text: {
            type: 'string',
            description: 'text'
        }
    }
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
    args: {
        text: 'Label'
    }
}

export const WithError: Story = {
    args: {
        isError: true,
        text: 'Label'
    }
}
