import { useState } from 'react'
import { CalendarTaskRadioButtonItem } from '../calendar-task-radio-button-item'
import cl from './CalendarTaskRadioButtonList.module.scss'
import { calendarTasksRadioButtonItemsArr } from './radio-buttons.data'
import type { TCalendarTasks } from './types'

export const CalendarTaskRadioButtonList = () => {
    const [activeTaskType, setActiveTaskType] = useState<TCalendarTasks>(
        calendarTasksRadioButtonItemsArr[0]
    )

    const onClick = (i: TCalendarTasks) => {
        if (i === activeTaskType) return
        setActiveTaskType(i)
    }

    return (
        <div className={cl.root}>
            {calendarTasksRadioButtonItemsArr.map(i => (
                <CalendarTaskRadioButtonItem
                    onClick={() => onClick(i)}
                    checked={i === activeTaskType}
                    key={i}
                    name={i}
                />
            ))}
        </div>
    )
}
