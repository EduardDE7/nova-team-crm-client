import cl from './CourseIcon.module.scss'
import { Icon, classNames } from '@/shared'

export const CourseIcon = ({
    className,
    color
}: {
    className?: string
    color: string
}) => {
    return (
        <div
            style={{ backgroundColor: color }}
            className={classNames(cl.root, className ?? '')}>
            <Icon
                name="Course"
                className={cl.root__icon}
            />
        </div>
    )
}
