import type { Meta, StoryObj } from '@storybook/react'
import Cookies from 'js-cookie'

import { useEffect } from 'react'

import { setupI18n } from '@/shared'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    decorators: [
        // i18n setup
        Story => {
            useEffect(() => {
                Cookies.set('language', 'ru')
                setupI18n()
            }, [])

            return <Story />
        }
    ],
    argTypes: {
        className: {
            type: 'string',
            description: 'ClassName for customization component'
        },
        label: {
            type: 'string',
            description: 'Label for input'
        },
        placeholder: {
            type: 'string',
            description: 'Placeholder for input'
        },
        noTranslate: {
            type: 'boolean',
            description: 'Is label and placeholder will be translate'
        },
        type: {
            type: 'string',
            description: 'Type input'
        },
        required: {
            type: 'boolean',
            description: 'Is field required'
        }
    }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>

export const WithLabel: Story = {
    args: {
        label: 'This is label',
        type: 'text'
    }
}
export const WithPlaceholder: Story = {
    args: {
        type: 'text',
        placeholder: 'This is placeholder'
    }
}
export const WithError: Story = {
	args: {
		label: 'This is label',
		type: 'text',
		error: 'This is error'
	}
}
export const Translate: Story = {
    args: {
        label: 'test-translate',
        placeholder: 'test-translate'
    }
}
export const NoTranslate: Story = {
    args: {
        label: 'no translated label',
        noTranslate: true,
        placeholder: 'no translated placeholder'
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
