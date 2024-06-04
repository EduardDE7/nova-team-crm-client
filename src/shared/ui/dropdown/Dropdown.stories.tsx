import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: 'shared/Dropdown',
    tags: ['autodocs'],
    argTypes: {
        options: {
            description: 'options of dropdown filter'
        },
        activeValue: {
            description: 'chosen active item'
        },
        setActiveValue: {
            type: 'function',
            description: 'sets active item'
        }
    }
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
    args: {
        options: [
            { title: 'First option', value: 'first_option' },
            { title: 'Second option', value: 'second_option' },
            { title: 'Third option', value: 'third_option' }
        ],
        activeValue: { title: 'First option', value: 'first_option' },
        setActiveValue: () => {}
    }
}

export const SecondOption: Story = {
    args: {
        options: [
            { title: 'First option', value: 'first_option' },
            { title: 'Second option', value: 'second_option' },
            { title: 'Third option', value: 'third_option' }
        ],
        activeValue: { title: 'Second option', value: 'second_option' },
        setActiveValue: () => {}
    }
}

export const ThirdOption: Story = {
    args: {
        options: [
            { title: 'First option', value: 'first_option' },
            { title: 'Second option', value: 'second_option' },
            { title: 'Third option', value: 'third_option' }
        ],
        activeValue: { title: 'Third option', value: 'third_option' },
        setActiveValue: () => {}
    }
}
