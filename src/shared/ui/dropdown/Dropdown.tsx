import { useState } from 'react'

import { Icon, Typography, classNames } from '@/shared'

import cl from './Dropdown.module.scss'
import { DropdownOption, DropdownTheme } from './types'

const { Text } = Typography

type DropdownProps = {
	activeValue?: DropdownOption
	theme?: DropdownTheme
	// eslint-disable-next-line no-unused-vars
	setActiveValue: (value: DropdownOption) => void
	options: DropdownOption[]
}

export const Dropdown = ({
	theme = 'default',
	activeValue,
	setActiveValue,
	options
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleSelect = (value: DropdownOption) => {
		setActiveValue(value)
		setIsOpen(false)
	}

	return (
		<div className={cl.root}>
			<div
				className={classNames(
					isOpen
						? cl.root__select_dropdown_open
						: cl.root__select_dropdown,
					theme === 'default'
						? cl.root__select_dropdown_default
						: cl.root__select_dropdown_thin
				)}
				onClick={() => setIsOpen(prev => !prev)}>
				<div
					className={classNames(
						isOpen ? cl.root__select_default_open : '',
						cl.root__select_default
					)}>
					<div>
						<Text
							text={activeValue?.title ?? ''}
							className={classNames(
								cl.root__option_text,
								theme === 'default'
									? cl.root__option_text_default
									: cl.root__option_text_thin
							)}
						/>
					</div>
					<div className={cl.root__icon_wrapper}>
						<Icon name={'Chevron'} />
					</div>
				</div>
			</div>

			{isOpen ? (
				<ul
					className={classNames(
						cl.root__dropdown_options,
						theme === 'default'
							? cl.root__dropdown_options_default
							: cl.root__dropdown_options_thin
					)}>
					{options.map(option => (
						<li
							key={option.title}
							className={
								theme === 'thin'
									? cl.root__select_option_thin
									: cl.root__select_option
							}
							onClick={() => handleSelect(option)}>
							<Text
								text={option.title}
								className={classNames(
									cl.root__option_text,
									theme === 'default'
										? cl.root__option_text_default
										: cl.root__option_text_thin
								)}
							/>
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}
