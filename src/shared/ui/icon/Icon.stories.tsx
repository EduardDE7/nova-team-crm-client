import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { IconName, icons } from './utils'

const meta = {
    title: 'shared/Icon',
    component: Icon,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Settings: Story = {
    args: {
        name: 'Settings'
    }
}

const iconNames: IconName[] = Object.keys(icons) as IconName[]

export const AllIcons = () => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '15px'
        }}>
        {iconNames.map(name => (
            <div
                key={name}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <div style={{ height: '25px' }}>
                    <Icon
                        name={name}
                        color="#1FC6C6"
                    />
                </div>
                <p>{name}</p>
            </div>
        ))}
    </div>
)
