import { useState } from 'react'
import cl from './Checkbox.module.scss'
import Done from '@/shared/assets/icons/done.svg?react'

export const Checkbox = ({ checked }: { checked: boolean }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked ?? false)

    const addCheck = () => setIsChecked(!isChecked)

    return (
        <div className={cl.root}>
            <div
                className={cl.root__checkbox}
                onClick={addCheck}>
                {isChecked ? <Done className={cl.root__icon} /> : ''}
            </div>
        </div>
    )
}
