import { useState } from 'react'
import cl from './Checkbox.module.scss'
import Done from '@/shared/assets/icons/done.svg?react'

interface CheckboxProps
    extends Omit<React.ComponentProps<'input'>, 'type' | 'value' | 'children'> {
    onChangeCallback: (isChecked: boolean) => void
}

export const Checkbox = ({ checked, onChangeCallback }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked ?? false)
    const handleChange = () => {
        const newStateChecked = !isChecked
        setIsChecked(newStateChecked)
        onChangeCallback(newStateChecked)
    }

    return (
        <label className={cl.root}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            {isChecked ? <Done /> : ''}
        </label>
    )
}
