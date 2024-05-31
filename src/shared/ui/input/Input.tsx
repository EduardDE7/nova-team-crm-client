import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
	placeholder: string
}

export const Input = ({ placeholder, error, ...props }: InputProps) => {
	const { t } = useTranslation()

	return (
		<div className={cl.root}>
			<input
				className={classNames(
					cl.root__input,
					error ? cl.root__input_error : ''
				)}
				placeholder={t(placeholder)}
				{...props}
			/>
			{error && <p className={cl.root__error}>{error}</p>}
		</div>
	)
}
