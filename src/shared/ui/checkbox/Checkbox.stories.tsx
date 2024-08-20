// import type { Meta, StoryObj } from '@storybook/react'
// import { Checkbox } from './Checkbox'

// const meta = {
//     title: 'shared/Checkbox',
//     component: Checkbox,
//     parameters: {
//         layout: 'centered'
//     },
//     tags: ['autodocs'],
//     argTypes: {
//         checked: {
//             type: 'boolean',
//             description: 'checkbox by default'
//         },
//         onChange: {
//             type: 'function',
//             description: `takes as an argument 'checked' and returns a result depending on the value`,
//             action: 'clicked'
//         }
//     }
// } satisfies Meta<typeof Checkbox>

// export default meta
// type Story = StoryObj<typeof meta>

// export const Default: Story = {
//     args: {
//         checked: false,
//         onChange: checked => {}
//     }
// }

// export const Checked: Story = {
//     args: {
//         checked: true,
//         onChange: checked => {}
//     }
// }
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
                onChange={onChange}
                checked={checked}
            />
        )
    }
}
