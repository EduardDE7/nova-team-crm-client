import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
    title: 'shared/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            type: 'boolean',
            description: 'check toggle by default'
        }
    }
} satisfies Meta<typeof Toggle>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        checked: true
    },
    render: function Render(arg) {
        const [{ checked }, updateArgs] = useArgs()

        function onChange() {
            updateArgs({ checked: !checked })
        }

        return (
            <Toggle
                {...arg}
                checked={checked}
                onChange={onChange}
            />
        )
    }
}
