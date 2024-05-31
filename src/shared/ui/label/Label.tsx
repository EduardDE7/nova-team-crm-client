import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './Label.module.scss'

interface LabelProps {
	text: string
	htmlFor: string
	isError?: boolean
}
export const Label = ({ text, htmlFor, isError }: LabelProps) => {
	const { t } = useTranslation()

	return (
		<label
			className={classNames(cl.root, isError ? cl.root_error : '')}
			htmlFor={htmlFor}>
			{t(text)}
		</label>
	)
}
