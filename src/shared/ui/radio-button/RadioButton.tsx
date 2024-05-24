import { classNames } from '@/shared'

import cl from './RadioButton.module.scss'

export const RadioButton = ({
    className,
    checked
}: {
    className?: string
    checked?: boolean
}) => {
    return (
        <div className={classNames(cl.root, className ?? '')}>
            <div
                className={classNames(
                    cl.root__body,
                    checked ? cl.root__body_checked : ''
                )}
            />
        </div>
    )
}
