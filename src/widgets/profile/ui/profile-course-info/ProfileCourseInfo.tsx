import cl from './ProfileCourseInfo.module.scss'
import { Icon, PercentCircle, Typography } from '@/shared'

const { Title, Text } = Typography

export const ProfileCourseInfo = ({
    percent,
    title,
    date
}: {
    percent: string
    title: string
    date: string
}) => {
    return (
        <div className={cl.root}>
            <div className={cl.top}>
                <div className={cl.icon}>
                    <Icon name={'Computer'} />
                </div>
                <Title
                    text={title}
                    variant="h4"
                    className={cl.title}
                />
            </div>
            <div className={cl.bottom}>
                <div className={cl.bottom__date}>
                    <Icon name="CalendarGray" />
                    <Text
                        noTranslate
                        text={'Created ' + date}
                        className={cl.bottom__date__text}
                    />
                </div>
                <div className={cl.percent}>
                    <PercentCircle percent={percent} />
                    <Text
                        text={percent + '%'}
                        noTranslate={true}
                        className={cl.number}
                    />
                </div>
            </div>
        </div>
    )
}
