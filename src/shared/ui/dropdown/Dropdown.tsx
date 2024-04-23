import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Icon, Typography } from '@/shared'

import cl from './Dropdown.module.scss'
import { DropdownOption } from './types'

const { Text } = Typography

export const Dropdown = ({
	activeValue,
	setActiveValue,
	options
}: {
	activeValue?: DropdownOption
	// eslint-disable-next-line no-unused-vars
	setActiveValue?: (value: DropdownOption) => void
	options: DropdownOption[]
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleSelect = (value: DropdownOption) => {
		setActiveValue?.(value)
		setIsOpen(false)
	}

	return (
		<div className={cl.root}>
			<div
				className={`${cl.root__select_dropdown} ${isOpen && cl.root__select_dropdown_open}`}
				onClick={() => setIsOpen(prev => !prev)}>
				<div
					className={`${isOpen && cl.root__select_default_open} ${cl.root__option_text} ${cl.root__select_default}`}>
					<div className={cl.root__profile_container}>
						{activeValue?.profileImage ? (
							<img
								className={cl.root__user_image}
								src={activeValue.profileImage}
								alt="profile_image"
							/>
						) : null}
						<Text
							text={activeValue?.title ?? ''}
							className={cl.root__default_text_color}
						/>
						<div className={cl.root__iconWrapper}>
							<Icon name={'Chevron'} />
						</div>
					</div>
				</div>
			</div>

			{isOpen ? (
				<ul className={cl.root__dropdown_options}>
					{options.map(option => {
						if (option.link)
							return (
								<Link
									to={option.link}
									key={option.title}
									onClick={() => handleSelect(option)}>
									<div className={cl.root__select_option}>
										<Text
											text={option.title}
											className={cl.root__option_text}
										/>
									</div>
								</Link>
							)
						return (
							<li
								key={option.title}
								className={cl.root__select_option}
								onClick={() => handleSelect(option)}>
								<Text
									text={option.title}
									className={cl.root__option_text}
								/>
							</li>
						)
					})}
				</ul>
			) : null}
		</div>
	)
}
