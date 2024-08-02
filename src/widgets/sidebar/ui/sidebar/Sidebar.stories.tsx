import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { registeredUsers, unRegisteredUsers } from './sidebar.data'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    tags: ['autodocs'],
    component: Sidebar,
    argTypes: {
        sidebarItems: {
            description: 'icon and title of sidebar items'
        }
    }
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const RegisteredUsers: Story = {
    render: () => (
        <BrowserRouter>
            <Sidebar sidebarItems={registeredUsers} />
        </BrowserRouter>
    )
}

export const UnRegisteredUsers: Story = {
    render: () => (
        <BrowserRouter>
            <Sidebar sidebarItems={unRegisteredUsers} />
        </BrowserRouter>
    )
}
