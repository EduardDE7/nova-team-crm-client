import type { ReactNode } from 'react'
import { Icon } from '../icon'
import cl from './PercentCircle.module.scss'
import { classNames } from '@/shared'

export const PercentCircle = ({
    percent,
    children,
    className
}: {
    percent: string
    children?: ReactNode
    className?: string
}) => {
    const checkedPercent = +percent > 100 ? '100' : percent

    return (
        <div
            style={{
                backgroundImage: `conic-gradient(at center, #1AD3D3 ${checkedPercent}%, #e4e6e8 0)`
            }}
            className={
                children
                    ? classNames(cl.root, cl.root_children, className ?? '')
                    : cl.root
            }>
            <div
                className={
                    children
                        ? classNames(cl.root__body, cl.root__body_children)
                        : cl.root__body
                }>
                {children ? (
                    <div className={cl.root__body__image}>{children}</div>
                ) : (
                    <>
                        {percent === '100' && (
                            <Icon
                                name="Done"
                                className={cl.root__body__icon}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
