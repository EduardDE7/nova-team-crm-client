import { useState } from 'react'

import {
	Button,
	Dropdown,
	changeThemeAction,
	useAppDispatch,
	useAppSelector
} from '@/shared'

import { HeaderNotification } from '../header-notification'
import { HeaderSearch } from '../header-search'
import cl from './Header.module.scss'
import profileImage from './profile_image.png'

export const Header = () => {
	const [isNotificationOpen, setIsNotificationOpen] = useState(false)
	const dispatch = useAppDispatch()
	const { theme } = useAppSelector(store => store.theme)

	return (
		<div className={cl.root}>
			<div className={cl.root__header_search_wrapper}>
				<HeaderSearch />
			</div>
			<Button
				className={cl.root__btn_notification}
				onClick={() => setIsNotificationOpen(true)}
				iconName="Notification"
			/>
			<Button
				className={cl.root__btn_theme}
				iconName={theme === 'dark' ? 'LightMode' : 'DarkMode'}
				onClick={() =>
					dispatch(
						changeThemeAction(theme === 'dark' ? 'light' : 'dark')
					)
				}
			/>
			<HeaderNotification
				isOpen={isNotificationOpen}
				setIsOpen={setIsNotificationOpen}
			/>

			<div style={{ maxHeight: '48px' }}>
				<Dropdown
					activeValue={{
						title: 'Evan Yates',
						value: 'profile',
						profileImage
					}}
					options={[
						{
							title: 'My profile',
							value: 'my_profile',
							link: '#'
						},
						{
							title: 'My schedule',
							value: 'my_schedule',
							link: '#'
						},
						{ title: 'Settings', value: 'settings', link: '#' }
					]}
				/>
			</div>
		</div>
	)
}
