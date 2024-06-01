import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
}

export const Input = ({
	leftIcon,
	rightIcon,
	placeholder,
	disabled,
	error,
	...props
}: InputProps) => {
	const { t } = useTranslation()

	return (
		<div className={cl.root}>
			<div
				className={classNames(
					cl.root__input__wrapper,
					error ? cl.root__input__wrapper_error : '',
					disabled ? cl.root__input__wrapper_disabled : ''
				)}>
				{leftIcon}
				<input
					className={cl.root__input}
					placeholder={placeholder && t(placeholder)}
					{...props}
				/>
				{rightIcon}
			</div>
			<div className={cl.root__error__wrapper}>
				{error && <p className={cl.root__error}>{error}</p>}
			</div>
		</div>
	)
}
