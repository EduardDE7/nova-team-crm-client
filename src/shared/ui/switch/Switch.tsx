import cl from './Switch.module.scss'
import { Typography, classNames } from '@/shared'

const { Text } = Typography

export const Switch = ({
    variant,
    options,
    activeValue,
    setActiveValue
}: {
    variant: 'noBackground' | 'withBackground'
    options: [string, string]
    activeValue: string
    setActiveValue: (v: string) => void
}) => {
    return (
        <div
            className={classNames(
                cl.root,
                variant === 'withBackground' ? cl.root_background : ''
            )}>
            <div
                className={classNames(
                    cl.root__btn,
                    activeValue === options[0] ? '' : cl.root__btn_move
                )}
            />
            {options.map(text => (
                <div
                    className={classNames(cl.root__text)}
                    key={text}
                    onClick={() => {
                        setActiveValue(text)
                    }}>
                    <Text
                        text={text}
                        className={classNames(
                            activeValue === text
                                ? cl.root__text_active
                                : cl.root__text_notactive
                        )}
                    />
                </div>
            ))}
        </div>
    )
}
