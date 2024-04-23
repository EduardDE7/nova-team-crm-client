import { useId } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './index.module.scss'

export const Input = ({
	label,
	className,
	noTranslate,
	variant,
	placeholder,
	...props
}: {
	label?: string
	placeholder: string
	className?: string
	noTranslate?: boolean
	variant: 'profile-edit' | 'auth' | 'event' | 'description'
	type?: 'text' | 'password' | 'tel' | 'date' | 'email'
	required?: boolean
}) => {
	const { type, ...propsForTextArea } = props // eslint-disable-line

	const { t } = useTranslation()

	const labelId = useId()

	const inputClasses = classNames(
		cl.root__input,
		variant === 'description' ? cl.root__input_textarea : '',
		className ?? ''
	)

	return (
		<div className={cl.root}>
			{label && (
				<label
					className={cl.root__label}
					htmlFor={labelId}>
					{noTranslate ? label : t(label)}
				</label>
			)}
			{variant === 'description' ? (
				<textarea
					id={labelId}
					className={inputClasses}
					{...propsForTextArea}
					placeholder={noTranslate ? placeholder : t(placeholder)}
				/>
			) : (
				<input
					className={inputClasses}
					id={labelId}
					placeholder={noTranslate ? placeholder : t(placeholder)}
					{...props}
				/>
			)}
		</div>
	)
}
