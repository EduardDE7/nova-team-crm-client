import { type CSSProperties } from 'react'
import cl from './icon.module.scss'
import { type IconName, getIcon } from './utils'
import { classNames } from '@/shared'

interface IconProps {
    name: IconName
    className?: string
    style?: CSSProperties
    color?: string
}

/**
 * @deprecated Use img tag instead
 */
export const Icon = ({ name, className, color }: IconProps) => {
    const Svg = getIcon(name)

    return (
        <Svg
            color={color}
            className={classNames(
                cl.root,
                color ? cl.root_color : '',
                className ?? ''
            )}
        />
    )
}
