import { ProfileCourseStatistic } from '..'
import { ProfileCourseInfo } from '../profile-course-info'
import cl from './ProfileCourse.module.scss'

export const ProfileCourse = ({
	date,
	percent,
	title,
	allLessons,
	uploadedLessons
}: {
	date: string
	percent: string
	title: string
	allLessons: string
	uploadedLessons: string
}) => {
	return (
		<div className={cl.root}>
			<ProfileCourseInfo
				date={date}
				percent={percent}
				title={title}
			/>
			<div className={cl.root__divide}></div>
			<ProfileCourseStatistic
				allLessons={allLessons}
				uploadedLessons={uploadedLessons}
			/>
		</div>
	)
}
