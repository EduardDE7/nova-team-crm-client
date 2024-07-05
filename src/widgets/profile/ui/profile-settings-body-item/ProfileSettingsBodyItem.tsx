import cl from './ProfileSettingsBodyItem.module.scss'
import { Toggle, Typography } from '@/shared'

const { Text } = Typography

export const ProfileSettingsBodyItem = ({
    title,
    description,
    check
}: {
    title: string
    description: string
    check?: boolean
}) => {
    return (
        <div className={cl.root}>
            <div>
                <Text
                    className={cl.root__title}
                    text={title}
                />
                <Text
                    className={cl.root__description}
                    text={description}
                />
            </div>
            <Toggle
                className={cl.root__toggle}
                checked={check}
            />
        </div>
    )
}
