import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../icon'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            type: 'string',
            description: 'Placeholder for input'
        },
        error: {
            type: 'string',
            description: 'Error for input'
        }
    }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        type: 'text',
        placeholder: 'This is placeholder'
    }
}

export const WithLeftIcon: Story = {
    args: {
        type: 'text',
        placeholder: 'This is placeholder',
        leftIcon: <Icon name={'Search'} />
    }
}

export const WithRightIcon: Story = {
    args: {
        type: 'text',
        placeholder: 'This is placeholder',
        rightIcon: <Icon name={'Add'} />
    }
}

export const WithError: Story = {
    args: {
        type: 'text',
        error: 'This is error',
        placeholder: 'This is placeholder'
    }
}

export const Disabled: Story = {
    args: {
        type: 'text',
        placeholder: 'This is placeholder',
        disabled: true,
        leftIcon: <Icon name={'Search'} />
    }
}
