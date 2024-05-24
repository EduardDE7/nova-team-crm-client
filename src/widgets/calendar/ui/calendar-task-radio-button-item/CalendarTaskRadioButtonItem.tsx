import { RadioButton, Typography } from '@/shared'

import type { TCalendarTasks } from '../calendar-task-radio-button-list'
import cl from './CalendarTaskRadioButtonItem.module.scss'

const { Text } = Typography

export const CalendarTaskRadioButtonItem = ({
    name,
    checked,
    onClick
}: {
    name: TCalendarTasks
    checked: boolean
    onClick: () => void
}) => {
    return (
        <div
            onClick={onClick}
            className={cl.root}>
            <RadioButton checked={checked} />
            <Text
                text={name}
                className={cl.root__text}
            />
        </div>
    )
}
