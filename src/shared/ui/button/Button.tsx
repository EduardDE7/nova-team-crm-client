import { Link } from 'react-router-dom'
import { Typography } from '../typography'
import cl from './Button.module.scss'
import { Icon, IconName, classNames } from '@/shared'

export const Button = ({
    className,
    text,
    iconName,
    fullWidth = false,
    thin = false,
    variant = 'primary',
    onClick,
    link
}: {
    className?: string
    text?: string
    iconName?: IconName
    fullWidth?: boolean
    thin?: boolean
    variant?: 'primary' | 'secondary' | 'icon-primary' | 'icon-secondary'
    onClick?: () => void
    link?: string
}) => {
    const { Text } = Typography
    const classNameVariant = {
        primary: cl.root__primary,
        secondary: cl.root__secondary,
        'icon-primary': cl.root__icon_primary,
        'icon-secondary': cl.root__icon_secondary
    }
    const classes = classNames(
        cl.root,
        className ?? '',
        text ? cl.root__text : '',
        text && iconName ? cl.root__text_icon : '',
        iconName && !text ? cl.root__icon : '',
        fullWidth ? cl.root_full : '',
        thin ? cl.root_thin : '',
        classNameVariant[variant]
    )

    if (link) {
        return (
            <Link
                to={link}
                className={classes}>
                {text && (
                    <Text
                        variant="button"
                        text={text}
                    />
                )}
                {iconName && <Icon name={iconName} />}
            </Link>
        )
    }

    return (
        <button
            className={classes}
            onClick={onClick}>
            {text && (
                <Text
                    variant="button"
                    text={text}
                />
            )}
            {iconName && <Icon name={iconName} />}
        </button>
    )
}
