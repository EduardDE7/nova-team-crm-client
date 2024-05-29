import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './Label.module.scss'

interface LabelProps {
	text: string
	htmlFor: string
	error?: string
}
export const Label = ({ text, htmlFor, error }: LabelProps) => {
	const { t } = useTranslation()

	return (
		<label
			className={classNames(cl.root, error ? cl.root_error : '')}
			htmlFor={htmlFor}>
			{t(text)}
		</label>
	)
}
