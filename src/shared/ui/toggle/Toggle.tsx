import { ComponentProps } from 'react'
import cl from './Toggle.module.scss'

interface ToggleProps
    extends Omit<ComponentProps<'input'>, 'type' | 'value' | 'children'> {}

export const Toggle = (props: ToggleProps) => {
    return (
        <input
            className={cl.root}
            type="checkbox"
            {...props}
        />
    )
}
