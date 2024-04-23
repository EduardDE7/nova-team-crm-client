import {
	ChartTypeRegistry,
	CoreScaleOptions,
	PluginOptionsByType,
	Scale
} from 'chart.js'
import { _DeepPartialObject } from 'node_modules/chart.js/dist/types/utils'

export type ScaleType = {
	max: number
	ticks: {
		callback: (
			// eslint-disable-next-line no-unused-vars
			this: Scale<CoreScaleOptions>,
			// eslint-disable-next-line no-unused-vars
			value: string | number
		) => string
		stepSize: number
		grid: { color: string }
	}
}

export const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export const monthLabels = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'31'
]
export const dayLabels = ['0h', '1h', '2h', '4h', '6h', '8h']

export const labelsDict: { [key: string]: string[] } = {
	weekly: weekLabels,
	daily: dayLabels,
	monthly: monthLabels
} as const

export const yDailyScale: ScaleType = {
	max: 120,
	ticks: {
		callback: value => {
			return value + 'min'
		},
		stepSize: 30,
		grid: {
			color: '#D9D9D9'
		}
	}
}

export const yScale: ScaleType = {
	max: 8,
	ticks: {
		callback: value => {
			return value + 'h'
		},
		stepSize: 2,
		grid: {
			color: '#D9D9D9'
		}
	}
}

export const StatTitles: { [key: string]: string } = {
	weekly: 'week',
	daily: 'day',
	monthly: 'month'
} as const

export const scaleDict: { [key: string]: ScaleType } = {
	weekly: yScale,
	monthly: yScale,
	daily: yDailyScale
}

export const plugins: _DeepPartialObject<
	PluginOptionsByType<keyof ChartTypeRegistry>
> = {
	legend: {
		display: false
	},
	title: {
		display: false
	},
	tooltip: {
		mode: 'index',
		enabled: false,
		external: context => {
			let tooltipEl = document.getElementById('chartjs-tooltip')

			if (!tooltipEl) {
				tooltipEl = document.createElement('div')
				tooltipEl.id = 'chartjs-tooltip'
				;(tooltipEl.innerHTML = '<table></table>'),
					document.body.appendChild(tooltipEl)
			}

			const tooltipModel = context.tooltip
			if (tooltipModel.opacity === 0) {
				tooltipEl.style.opacity = '0'
				return
			}

			tooltipEl.classList.remove('above', 'below', 'no-tranform')
			if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign)
			} else {
				tooltipEl.classList.add('no-tranform')
			}

			const getBody = (bodyItem: { lines: string[] }) => {
				return bodyItem.lines
			}

			if (tooltipModel.body) {
				const bodyLines = tooltipModel.body.map(getBody)

				let innerHtml = '<tbody>'

				bodyLines.forEach(body => {
					const div =
						'<div style="padding: 7px 13px; background-color: #E8D8F0; font-size: 12px; color: #877D92; border-radius: 5px">' +
						body +
						'</div>'

					innerHtml += '<tr><td>' + div + '</td></tr>'
				})
				innerHtml += '</tbody>'

				const tableRoot = tooltipEl.querySelector('table')
				if (!tableRoot) return
				tableRoot.innerHTML = innerHtml

				const position = context.chart.canvas.getBoundingClientRect()

				tooltipEl.style.opacity = '1'
				tooltipEl.style.position = 'absolute'
				tooltipEl.style.left =
					position.left + 10 + tooltipModel.caretX + 'px'
				tooltipEl.style.top =
					position.top - 15 + tooltipModel.caretY + 'px'
				tooltipEl.style.pointerEvents = 'none'
			}
		}
	}
}
