import type { Meta, StoryObj } from '@storybook/react'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Typography } from '../Typography'
import { setupI18n } from '@/shared'

const { Text } = Typography

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
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
    parameters: {
        layout: ['centered']
    },
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string',
            description: 'ClassName for customization component'
        },
        text: {
            type: 'string',
            description: 'Text'
        },
        noTranslate: {
            type: 'boolean',
            description: 'Is text will be translate'
        }
    }
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
    args: {
        text: 'all-lessons'
    }
}

export const NoTranslate: Story = {
    args: {
        text: 'All lessons',
        noTranslate: true
    }
}
