import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon, classNames } from '@/shared'

import cl from './Input.module.scss'

export const Input = ({
    label,
    className,
    noTranslate,
    placeholder,
    error,
	type = 'text',
    ...props
}: {
    label?: string
    className?: string
	noTranslate?: boolean
	placeholder: string
	error?: string
	type?: 'text' | 'password' | 'tel' | 'date' | 'email'
	required?: boolean
	disabled?: boolean
}) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false)

    const { t } = useTranslation()

    const labelId = useId()

    return (
		<div className={cl.root}>
			{label && (
				<label
					className={classNames(
						cl.root__label,
						error ? cl.root__label_error : ''
					)}
					htmlFor={labelId}>
					{noTranslate ? label : t(label)}
				</label>
			)}
			<div className={cl.root__input__wrapper}>
                <input
                    className={classNames(
						cl.root__input,
						className ?? '',
						error ? cl.root__input_error : ''
                    )}
					id={labelId}
					placeholder={noTranslate ? placeholder : t(placeholder)}
					type={type === 'password' && isPasswordShow ? 'text' : type}
					{...props}
                />
				{type === 'password' && (
					<button
						className={classNames(
							cl.root__button,
							isPasswordShow ? cl.root__button_active : ''
						)}
						onClick={() => setIsPasswordShow(!isPasswordShow)}>
						<Icon name="Eye" />
					</button>
				)}
			</div>
            {error && <p className={cl.root__error}>{error}</p>}
        </div>
    )
}
