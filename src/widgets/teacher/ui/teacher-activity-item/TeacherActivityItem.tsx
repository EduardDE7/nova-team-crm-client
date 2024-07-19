import { memo } from 'react'
import TeacherImage from './teacher-image.png'
import cl from './TeacherActivityItem.module.scss'
import { PercentCircle, Typography } from '@/shared'

const { Text } = Typography

export const TeacherActivityItem = ({
    fullName,
    position,
    teachesCourses,
    lessonsInTotal,
    uploadedLessons,
    progress
}: {
    fullName: string
    position: string
    teachesCourses?: number
    lessonsInTotal?: number
    uploadedLessons?: number
    progress: number
}) => {
    return (
        <div className={cl.root}>
            <div className={cl.root__teacher_profile}>
                <PercentCircle
                    className={cl.root__percent_circle}
                    percent={progress?.toString() ?? '0'}>
                    <div className={cl.root__teacher_profile_in_circle}>
                        <img
                            className={cl.root__teacher_profile_image}
                            src={TeacherImage}
                            alt="teacher_image"
                        />
                    </div>
                </PercentCircle>
                <div className={cl.root__teacher_info}>
                    <Text
                        text={fullName}
                        className={cl.root__teacher_fullname}
                    />
                    <Text
                        text={position}
                        className={cl.root__teacher_position}
                    />
                </div>
            </div>
            <div className={cl.root__teacher_profile_info}>
                <TeacherInfoItem
                    count={teachesCourses ?? 0}
                    text="teaches-courses"
                />
                <TeacherInfoItem
                    count={lessonsInTotal ?? 0}
                    text="lessons-in-total"
                />
                <TeacherInfoItem
                    count={uploadedLessons ?? 0}
                    text="uploaded-lessons"
                />
            </div>
        </div>
    )
}

const TeacherInfoItem = memo(
    ({ count, text }: { count: number; text: string }) => {
        return (
            <div className={cl.root__teacher_courses_info}>
                <Text
                    text={count.toString()}
                    className={cl.root__teacher_courses_text}
                />
                <Text
                    text={text}
                    className={cl.root__teacher_courses_title}
                />
            </div>
        )
    }
)
