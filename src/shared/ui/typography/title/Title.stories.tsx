import type { Meta, StoryObj } from '@storybook/react'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Typography } from '../Typography'
import { setupI18n } from '@/shared'

const { Title } = Typography

const meta: Meta<typeof Title> = {
    // setup i18n
    decorators: [
        Story => {
            useEffect(() => {
                Cookies.set('language', 'ru')
                setupI18n()
            }, [])

            return <Story />
        }
    ],
    component: Title,
    title: 'shared/Title',
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
        },
        variant: {
            type: 'string',
            description: 'Styles variables for component'
        }
    }
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof Title>

export const VariantH1: Story = {
    args: {
        text: 'all-lessons',
        variant: 'h1'
    }
}

export const VariantH3: Story = {
    args: {
        text: 'all-lessons',
        variant: 'h3'
    }
}

export const VariantH4: Story = {
    args: {
        text: 'all-lessons',
        variant: 'h4'
    }
}

export const NoTranslate: Story = {
    args: {
        text: 'NO TRANSLATE',
        variant: 'h1',
        noTranslate: true
    }
}
