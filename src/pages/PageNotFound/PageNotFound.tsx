import { useNavigate } from 'react-router-dom'
import NotFoundImage from '../../shared/assets/images/404.svg'
import cl from './PageNotFound.module.scss'
import { Button, Typography } from '@/shared'

const { Text } = Typography

export const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className={cl.root}>
            <div className={cl.root__content}>
                <img
                    src={NotFoundImage}
                    alt="404 Error: Page not found"
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
