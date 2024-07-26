import { useTranslation } from 'react-i18next'
import cl from './Text.module.scss'
import { classNames } from '@/shared'

/**
 * @deprecated Use font mixins instead
 */
export const Text = ({
    className,
    text,
    noTranslate,
    variant = 'default'
}: {
    className?: string
    text: string
    noTranslate?: boolean
    variant?: 'default' | 'button'
}) => {
    const { t } = useTranslation()

    return (
        <p
            className={classNames(
                cl.root,
                className ?? '',
                variant === 'button' ? cl.root__button : ''
            )}>
            {noTranslate ? text : t(text)}
        </p>
    )
}
