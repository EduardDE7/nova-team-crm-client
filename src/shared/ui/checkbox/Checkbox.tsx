import { useState } from 'react'
import cl from './Checkbox.module.scss'
import { Icon } from '@/shared'

export const Checkbox = ({ checked }: { checked: boolean }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked ?? false)

    const addCheck = () => setIsChecked(!isChecked)

    return (
        <div className={cl.root}>
            <div
                className={cl.root__checkbox}
                onClick={addCheck}>
                {isChecked ? (
                    <Icon
                        name="Done"
                        className={cl.root__icon}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
