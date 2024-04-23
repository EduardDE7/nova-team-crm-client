import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

// eslint-disable-next-line
import '@/app/styles/index.scss'

import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'shared/Switch',
	parameters: {
		layout: ['centered']
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			type: 'string',
			description: 'Styles variables for component'
		},
		options: [
			{
				textLeftSide: {
					type: 'string',
					description: 'Left value'
				},
				textRightSide: {
					type: 'string',
					description: 'Right value'
				}
			}
		],
		activeValue: {
			type: 'string',
			description: 'Active value'
		},
		setActiveValue: {
			type: 'function',
			description: 'Change active value '
		}
	}
}
export default meta

type Story = StoryObj<typeof Switch>

export const NoBackground: Story = {
	args: {
		variant: 'noBackground',
		options: ['Courses', 'My schedule'],
		activeValue: 'Courses',
		setActiveValue: () => {}
	},
	decorators: [
		Story => {
			const options: [string, string] = ['Courses', 'My schedule']

			const [activeValue, setActiveValue] = useState(options[0])

			return (
				<Story
					args={{
						activeValue,
						setActiveValue,
						options,
						variant: 'noBackground'
					}}
				/>
			)
		}
	]
}
export const WithBackground: Story = {
	decorators: [
		Story => {
			const options: [string, string] = ['Days', 'Lists']

			const [activeValue, setActiveValue] = useState(options[0])

			return (
				<Story
					args={{
						activeValue,
						setActiveValue,
						options,
						variant: 'withBackground'
					}}
				/>
			)
		}
	]
}
