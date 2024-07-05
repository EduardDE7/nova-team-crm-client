import { Link } from 'react-router-dom'
import cl from './SidebarItem.module.scss'
import { Icon, type IconName, Typography } from '@/shared'

const { Title } = Typography

export const SidebarItem = ({
    title,
    icon,
    route,
    onClick
}: {
    title: string
    icon: IconName
    route?: string
    onClick?: () => void
}) => {
    return (
        <>
            {route ? (
                <Link
                    to={route}
                    className={cl.root}>
                    <Icon
                        name={icon}
                        className={cl.root__sidebar_item_icon}
                    />
                    <Title
                        text={title}
                        variant="h4"
                        className={cl.root__sidebar_item_title}
                    />
                </Link>
            ) : (
                <button
                    className={`${cl.root__button} ${cl.root}`}
                    onClick={onClick}>
                    <Icon
                        name={icon}
                        className={cl.root__sidebar_item_icon}
                    />
                    <Title
                        text={title}
                        variant="h4"
                        className={cl.root__sidebar_item_title}
                    />
                </button>
            )}
        </>
    )
}
