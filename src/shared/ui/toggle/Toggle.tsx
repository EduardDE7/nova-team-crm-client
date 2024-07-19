import { useState } from 'react'
import cl from './Toggle.module.scss'
import { classNames } from '@/shared'

export const Toggle = ({
    className,
    checked
}: {
    className?: string
    checked?: boolean
}) => {
    const [isActive, setIsActive] = useState<boolean>(checked ?? false)

    return (
        <div
            onClick={() => setIsActive(!isActive)}
            className={classNames(
                cl.root,
                isActive ? cl.root_active : '',
                className ?? ''
            )}>
            <div
                className={classNames(
                    cl.root__body,
                    isActive ? cl.root__body_active : ''
                )}
            />
        </div>
    )
}
