import {
	BarElement,
	BarOptions,
	CategoryScale,
	Chart as ChartJS,
	ChartOptions,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

import {
	Dropdown,
	DropdownOption,
	Icon,
	Typography,
	classNames
} from '@/shared'

import {
	StatTitles,
	labelsDict,
	plugins,
	scaleDict
} from './ProfileActivity.data'
import cl from './ProfileActivity.module.scss'

const { Text } = Typography

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

type TProfileActivityProps = {
	stat?: number
	activeValue: DropdownOption
	// eslint-disable-next-line no-unused-vars
	setActiveValue: (value: DropdownOption) => void
	activityData: number[]
}

export const ProfileActivity = ({
	activityData,
	stat,
	activeValue,
	setActiveValue
}: TProfileActivityProps) => {
	const options: ChartOptions = {
		responsive: true,
		scales: {
			y: scaleDict[activeValue.value],
			x: {
				grid: {
					display: false
				}
			}
		},
		plugins: plugins
	}

	const data = {
		labels: labelsDict[activeValue.value],
		datasets: [
			{
				data: activityData,
				backgroundColor: '#D7CEFF',
				hoverBackgroundColor: '#1FC6C6',
				barThickness: 6,
				borderRadius: 50
			}
		]
	}

	const doesStatIncrease = stat && stat > 0
	const statText = doesStatIncrease
		? 'increase ' + 'than last' + ' ' + `${StatTitles[activeValue.value]}`
		: 'decrease ' + 'than last' + ' ' + `${StatTitles[activeValue.value]}`
	return (
		<div className={cl.root}>
			<div className={cl.root__activity_header}>
				<div className={cl.root__personal_bar}>
					<div className={cl.root__personal_activity}>
						<Text
							text="Hours Activity"
							className={cl.root__title}
						/>
						<div className={cl.root__activity_changes}>
							<Icon
								name={'Arrow'}
								className={classNames(
									cl.root__activity_icon,
									doesStatIncrease
										? cl.root__arrow_icon_increase
										: cl.root__arrow_icon_decrease
								)}
							/>
							<Text
								text={stat?.toString() + '%'}
								className={classNames(
									cl.root__activity_stat,
									doesStatIncrease
										? cl.root__stat_increase
										: cl.root__stat_decrease
								)}
							/>
							<Text
								text={statText}
								className={cl.root__text_of_changes}
							/>
						</div>
					</div>
				</div>
				<div className={cl.root__personal_settings}>
					<Dropdown
						theme={'thin'}
						setActiveValue={setActiveValue}
						activeValue={activeValue}
						options={[
							{ title: 'Weekly', value: 'weekly' },
							{ title: 'Daily', value: 'daily' },
							{ title: 'Monthly', value: 'monthly' }
						]}
					/>
				</div>
			</div>
			<Bar
				options={options as BarOptions}
				data={data}
			/>
		</div>
	)
}
