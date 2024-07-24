import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#f9f4fd' },
				{ name: 'dark', value: '#241F2E' }
			]
		}
	},
	decorators: [
		Story => {
			document.body.setAttribute('data-theme', 'light')
			return Story()
		}
	]
}

export default preview
