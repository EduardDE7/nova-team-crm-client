
import { Dispatch, SetStateAction } from 'react'
import { Calendar as ReactCalendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Icon } from '@/shared'
import { LooseValue } from 'node_modules/react-calendar/dist/esm/shared/types'
import cl from './Calendar.module.scss'
import './styles.css' 

export const Calendar = ({date, setDate}: {date?: LooseValue, setDate: Dispatch<SetStateAction<LooseValue | undefined>>}) => {
	return (
		<div className={cl.root}>
			<ReactCalendar
				value={date}
				className={cl.root__calendar}
				goToRangeStartOnSelect={true}
				navigationAriaLabel={'go up'}
				navigationAriaLive={'polite'}
				next2Label={null}
				prev2Label={null}
				nextLabel={
					<div className={cl.root__arrow_right}>
						<Icon
							name="Arrow"
							style={{ width: '20px' }}
						/>
					</div>
				}
				prevLabel={
					<div className={cl.root__arrow_left}>
						<Icon
							name="Arrow"
							style={{ width: '20px' }}
						/>
					</div>
				}
				onChange={setDate}
				locale="en"
				selectRange={true}
			/>
		</div>
	)
}
