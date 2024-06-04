import { TeacherListItem } from '../teacher-list-item'
import cl from './index.module.scss'
import { teacherActivityListItemsArr } from './teacher-list.data'

export const TeacherList = () => {
    return (
        <ul className={cl.root}>
            {teacherActivityListItemsArr.map((i, index) => (
                <TeacherListItem
                    key={index}
                    {...i}
                />
            ))}
        </ul>
    )
}
