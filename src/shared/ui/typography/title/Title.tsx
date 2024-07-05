import { useTranslation } from 'react-i18next'
import cl from './Title.module.scss'
import { classNames } from '@/shared'

export const Title = ({
    variant,
    className,
    text,
    noTranslate
}: {
    variant: 'h1' | 'h3' | 'h4'
    className?: string
    text: string
    noTranslate?: boolean
}) => {
    const { t } = useTranslation()

    switch (variant) {
        case 'h1':
            return (
                <h1
                    className={classNames(
                        cl.root,
                        cl.root__h1,
                        className ?? ''
                    )}>
                    {noTranslate ? text : t(text)}
                </h1>
            )
        case 'h3':
            return (
                <h2
                    className={classNames(
                        cl.root,
                        cl.root__h3,
                        className ?? ''
                    )}>
                    {noTranslate ? text : t(text)}
                </h2>
            )
        case 'h4':
            return (
                <h3
                    className={classNames(
                        cl.root,
                        cl.root__h4,
                        className ?? ''
                    )}>
                    {noTranslate ? text : t(text)}
                </h3>
            )
    }
}
