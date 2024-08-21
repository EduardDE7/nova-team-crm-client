import { StoryObj, Meta } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { Checkbox } from './Checkbox'

const meta = {
    title: 'shared/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            type: 'boolean',
            description: 'checkbox by default'
        }
    }
} satisfies Meta<typeof Checkbox>
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
            <Checkbox
                {...arg}
                checked={checked}
                onChange={onChange}
            />
        )
    }
}
