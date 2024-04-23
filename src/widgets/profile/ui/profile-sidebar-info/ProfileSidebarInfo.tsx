import { PercentCircle, Button, Input, Typography } from '@/shared'
import AvatarExample from './photo.png'
import cl from './ProfileSidebarInfo.module.scss'

const { Text, Title} = Typography

export const ProfileSidebarInfo = () => {

	return (
		<div className={cl.root}>
			<div className={cl.root__header}>
				<div className={cl.root__header__leftside}>
					<PercentCircle percent="28">
						{
							<img
								src={AvatarExample}
								alt="photo"
							/>
						}
					</PercentCircle>
					<Text
						text="Evan Yates"
						className={cl.root__header__leftside__title}
					/>
					<Text
						text="Student"
						className={cl.root__header__leftside__text}
					/>
				</div>
				<div className={cl.root__header__button}>
					<Button
						iconName="Edit"
						variant="icon-secondary"
					/>
				</div>
			</div>
			<div className={cl.root__br} />
			<div className={cl.root__body}>
				<Title
					variant="h3"
					text="Main info"
				/>
				<Input
					placeholder="Student"
					variant="profile-edit"
					label="Position"
					type="text"
				/>
				<Input
					placeholder="May 19, 1996"
					label="Birthday"
					type="date"
					variant="profile-edit"
				/>
				<Title
					variant="h3"
					text="Contact Info"
				/>
				<Input
					type="email"
					label="Email"
					placeholder="evanyates@gmail.com"
					variant="profile-edit"
				/>
				<Input
					type="tel"
					placeholder="+1 675 346 23-10"
					variant="profile-edit"
					label="Mobile Number"
				/>
				<Input
					label="Discord"
					type="text"
					placeholder="2256"
					variant="profile-edit"
				/>
			</div>
		</div>
	)
}
