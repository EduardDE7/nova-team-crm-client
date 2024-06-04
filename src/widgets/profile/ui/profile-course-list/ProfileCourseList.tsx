import { ProfileCourseItem } from '../profile-course-item'
import { courseItems } from './profile-course-list.data'
import cl from './Profile-course-list.module.scss'

export const ProfileCourseList = () => {
    return (
        <div className={cl.root}>
            {courseItems.map(item => (
                <ProfileCourseItem
                    courseName={item.courseName}
                    lessonType={item.lessonType}
                    groupType={item.groupType}
                />
            ))}
        </div>
    )
}
