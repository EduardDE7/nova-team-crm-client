import { ProfileCourseStatistic } from '..'
import { ProfileCourseInfo } from '../profile-course-info'
import cl from './ProfileCourse.module.scss'

export const ProfileCourse = () => {
	return (
		<div className={cl.root}>
			<ProfileCourseInfo
				date="Apr 19 2024"
				percent="8"
				title="Frontend"
			/>
			<div className={cl.root__divide}></div>
			<ProfileCourseStatistic
				allLessons="18"
				uploadedLessons="3"
			/>
		</div>
	)
}
