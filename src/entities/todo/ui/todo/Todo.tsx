import { Icon, Typography } from '@/shared'

import Avatar from './photo.png'
import cl from './Todo.module.scss'

const { Text } = Typography

export const Todo = ({
	task,
	todotime,
	variant = 'low'
}: {
	task: string
	todotime: string
	variant?: 'low' | 'medium' | 'high'
}) => {
	return (
		<div className={cl.root}>
			<Text
				text={task}
				className={cl.root__text}
			/>
			<div className={cl.root__bottom}>
				<div className={cl.root__bottom__right}>
					<div className={cl.root__bottom__right__todotime}>
						<Text text={todotime} />
					</div>
					<Icon
						name="Arrow"
						color={
							variant === 'medium'
								? '#e78175'
								: variant === 'high'
									? '#F93042'
									: ''
						}
					/>
				</div>
				<img
					src={Avatar}
					alt="photo"
				/>
			</div>
		</div>
	)
}
