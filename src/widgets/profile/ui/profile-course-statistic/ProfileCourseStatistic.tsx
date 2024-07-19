import cl from './ProfileCourseStatistic.module.scss'
import ProfileImage from './course-mentor-example.png'
import { Typography } from '@/shared'

const { Text, Title } = Typography

export const ProfileCourseStatistic = ({
    allLessons,
    uploadedLessons
}: {
    allLessons: string
    uploadedLessons: string
}) => {
    return (
        <div className={cl.root}>
            <Title
                text="course-data"
                variant="h4"
                className={cl.root__title}
            />
            <div className={cl.root__body}>
                <div className={cl.root__body__all}>
                    <Text
                        className={cl.root__body__title}
                        text="all-lessons"
                    />
                    <Text
                        className={cl.root__body__text}
                        text={allLessons}
                        noTranslate
                    />
                </div>
                <div className={cl.root__body__uploaded}>
                    <Text
                        text="uploaded-lessons"
                        className={cl.root__body__title}
                    />
                    <Text
                        className={cl.root__body__text}
                        text={uploadedLessons}
                        noTranslate
                    />
                </div>
                <div className={cl.root__body__teacher}>
                    <Text
                        text="teacher"
                        className={cl.root__body__title}
                    />
                    <img
                        src={ProfileImage}
                        alt="teacher"
                    />
                </div>
            </div>
        </div>
    )
}
