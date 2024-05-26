import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon, IconName, classNames } from '@/shared'

import cl from './Input.module.scss'

export const Input = ({
    label,
    noTranslate,
	placeholder,
	error,
	type = 'text',
    variant = 'default',
	icon,
	onClickIcon,
	...props
}: {
	label?: string
	noTranslate?: boolean
	placeholder: string
	error?: string
	type?: 'text' | 'password' | 'tel' | 'date' | 'email'
	variant?: 'search' | 'default' | 'auth'
	required?: boolean
	disabled?: boolean
	icon?: IconName
	onClickIcon?: () => void
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
                {variant === 'search' && (
					<button
						onClick={onClickIcon}
						className={classNames(
							cl.root__button,
							cl.root__button_search
						)}>
						<Icon name="Search" />
					</button>
				)}
				<input
					className={classNames(
						cl.root__input,
						variant === 'search' ? cl.root__input_search : '',
						variant === 'auth' ? cl.root__input_auth : '',
						icon || type === 'password' ? cl.root__input_icon : '',
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
							cl.root__button_password,
							isPasswordShow
								? cl.root__button_password_active
								: ''
						)}
						onClick={() => setIsPasswordShow(!isPasswordShow)}>
						<Icon name="Eye" />
					</button>
				)}
				{icon && (
					<button
						className={classNames(
							cl.root__button,
							cl.root__button_custom
						)}
						onClick={onClickIcon}>
						<Icon name={icon} />
					</button>
				)}
			</div>
            {error && <p className={cl.root__error}>{error}</p>}
        </div>
    )
}
