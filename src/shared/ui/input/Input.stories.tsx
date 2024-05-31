import type { Meta, StoryObj } from '@storybook/react'

// eslint-disable-next-line
import '@/app/styles/variables.scss'

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
export const WithError: Story = {
	args: {
		type: 'text',
		error: 'This is error',
		placeholder: 'This is placeholder'
    }
}
export const ProfileEditVariant: Story = {
    args: {
        placeholder: 'profile-edit'
    }
}
export const AuthVariant: Story = {
    args: {
        placeholder: 'auth'
    }
}
export const EventVariant: Story = {
    args: {
        placeholder: 'event'
    }
}

export const DescriptionVariant: Story = {
    args: {
        placeholder: 'description'
    }
}
