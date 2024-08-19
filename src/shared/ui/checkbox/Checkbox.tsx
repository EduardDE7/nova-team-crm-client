import { ComponentProps } from 'react'
import cl from './Checkbox.module.scss'

interface CheckboxProps
    extends Omit<ComponentProps<'input'>, 'type' | 'value' | 'children'> {}

export const Checkbox = (props: CheckboxProps) => {
    return (
        <input
            className={cl.root}
            type="checkbox"
            {...props}
        />
    )
}
