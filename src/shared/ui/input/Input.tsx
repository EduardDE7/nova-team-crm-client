import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon, IconName, classNames } from '@/shared'

import { Label } from '../label'
import cl from './Input.module.scss'

interface ExtendedInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	leftElement?: React.ReactNode
	rightElement?: React.ReactNode
}

export const Input = ({
	label,
	placeholder,
	error,
	type = 'text',
	leftElement,
	rightElement,
	...props
}: ExtendedInputProps & {
	label?: string
	placeholder: string
	error?: string
	type?: 'text' | 'password' | 'tel' | 'date' | 'email'
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
				<Label
					text={label}
					htmlFor={labelId}
					error={error}
				/>
			)}

			<div className={cl.root__input__wrapper}>
				{leftElement}
				<input
					className={classNames(
						cl.root__input,
						error ? cl.root__input_error : ''
					)}
					id={labelId}
					placeholder={t(placeholder)}
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
				{rightElement}
			</div>
			{error && <p className={cl.root__error}>{error}</p>}
		</div>
	)
}
