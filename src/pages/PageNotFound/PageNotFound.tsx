import { useNavigate } from 'react-router-dom'

import { Button, Icon } from '@/shared'
import { Typography } from '@/shared'

import cl from './PageNotFound.module.scss'

const { Text } = Typography

export const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className={cl.root}>
            <div className={cl.root__content}>
                <Icon
                    name="NotFound"
                    className={cl.root__content__icon}
                />
                <Text
                    text="The page not found..."
                    className={cl.root__content__text}
                    variant="button"
                />
                <Button
                    text="Go to the main page"
                    variant="secondary"
                    className={cl.root__content__button}
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    )
}
