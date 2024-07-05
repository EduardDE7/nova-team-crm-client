import type { Meta, StoryObj } from '@storybook/react'
import { PercentCircle } from './PercentCircle'
import AvatarExample from './percent-circle-example.png'

const meta: Meta<typeof PercentCircle> = {
    title: 'shared/PercentCircle',
    tags: ['autodocs'],
    component: PercentCircle,
    argTypes: {
        percent: {
            type: 'string',
            description: 'Percent value of fill. 0-100%'
        }
    },
    parameters: {
        layout: ['centered']
    }
}

export default meta

type Story = StoryObj<typeof PercentCircle>

export const Default: Story = {
    args: {
        percent: '47'
    }
}

export const Full: Story = {
    args: {
        percent: '100'
    }
}

export const Children: Story = {
    args: {
        percent: '79',
        children: <img src={AvatarExample} />
    }
}

export const ChildrenFull: Story = {
    args: {
        percent: '100',
        children: <img src={AvatarExample} />
    }
}
