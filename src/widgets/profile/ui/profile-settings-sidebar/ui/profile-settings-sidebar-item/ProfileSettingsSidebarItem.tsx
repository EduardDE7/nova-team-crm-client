import { Icon, type IconName, Typography, classNames } from '@/shared'

import cl from './ProfileSettingsSidebarItem.module.scss'

const { Text } = Typography

export const ProfileSettingsSidebarItem = ({
    title,
    icon,
    active,
    onClick
}: {
    title: string
    icon: IconName
    active: boolean
    onClick: () => void
}) => {
    return (
        <button
            className={!active ? cl.root : classNames(cl.root, cl.root_active)}
            onClick={onClick}>
            <Icon
                name={icon}
                className={
                    !active
                        ? cl.root__icon
                        : classNames(cl.root__icon, cl.root__icon_active)
                }
            />
            <Text
                text={title}
                className={cl.root__title}
            />
        </button>
    )
}
