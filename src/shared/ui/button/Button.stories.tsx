import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	tags: ['autodocs'],
	component: Button,
	argTypes: {
		fullWidth: {
			type: 'boolean',
			description: 'Make button full width',
			defaultValue: false
		},
		thin: {
			type: 'boolean',
			description: 'Make button thin',
			defaultValue: false
		},
		link: {
			type: 'string',
			description: 'Is button link'
		}
	},
	parameters: {
		layout: ['centered']
	}
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		text: 'Button',
		iconName: 'Add'
	}
}
export const Secondary: Story = {
	args: {
		text: 'Button',
		variant: 'secondary'
	}
}
export const IconPrimary: Story = {
	args: {
		iconName: 'Add',
		variant: 'icon-primary'
	}
}
export const IconSecondary: Story = {
	args: {
		iconName: 'Add',
		variant: 'icon-secondary'
	}
}
export const Link: Story = {
	render: () => (
		<BrowserRouter>
			<Button
				iconName="More"
				link="#"
			/>
		</BrowserRouter>
	)
}
