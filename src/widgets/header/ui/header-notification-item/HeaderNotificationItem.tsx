import type { THeaderNotificationItem } from '../../types'
import cl from './HeaderNotificationItem.module.scss'
import userImage from './user-image.png'
import { Typography } from '@/shared'

const { Text, Title } = Typography
export const HeaderNotificationItem = ({
    name,
    description,
    date
}: THeaderNotificationItem) => {
    return (
        <li className={cl.root}>
            <div>
                <img
                    className={cl.root__user__profile_image}
                    src={userImage}
                    alt="profile_image"
                />
            </div>
            <div className={cl.root__notification__body}>
                <div className={cl.root__notification_header}>
                    <Title
                        variant="h3"
                        text={name}
                        className={cl.root__user_name}
                    />
                    <Text
                        className={cl.root__notification_description}
                        text={description}
                    />
                </div>
                <Text
                    className={cl.root__notification_date}
                    text={date}
                />
            </div>
        </li>
    )
}
