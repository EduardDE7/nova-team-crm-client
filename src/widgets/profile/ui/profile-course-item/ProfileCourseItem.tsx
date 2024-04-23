import { Link } from 'react-router-dom'
 
import { Icon, Typography } from '@/shared'

import cl from './ProfileCourseItem.module.scss'

const { Title, Text } = Typography

export const ProfileCourseItem = ({
	lessonType,
	groupType,
	courseName
}: {
	courseName: string
	lessonType: string
	groupType: string
}) => {
	return (
		<Link
			to={'#'}
			className={cl.root}>
			<div
				className={`${cl.root__icon_wrapper} ${lessonType === 'Lecture' ? cl.orange : cl.green}`}>
				<Icon
					name={'Course'}
					className={cl.root__course_item_icon}
				/>
			</div>
			<div className={cl.root__course_info}>
				<div title={courseName}>
					<Title
						text={courseName}
						variant="h3"
						className={cl.root__course_item_title}
					/>
				</div>
				<div className={cl.root__lower_container}>
					<Text
						text={lessonType}
						className={cl.root__course_item_lesson}
					/>
					&nbsp;-&nbsp;
					<Text
						text={groupType}
						className={cl.root__course_item_group}
					/>
				</div>
			</div>
			<div className={cl.root__course_item_button}>
				<Icon name={'Arrow'} />
			</div>
		</Link>
	)
}
