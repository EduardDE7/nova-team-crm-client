import { useEffect } from 'react'
import { HeaderNotificationItem } from '../header-notification-item'
import { headerNotificationItemsArr } from './header-notification.data'
import cl from './index.module.scss'
import { Button, Typography, classNames } from '@/shared'

const { Title } = Typography

export const HeaderNotification = ({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean
    setIsOpen: (o: boolean) => void
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        }

        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, [isOpen])

    return (
        <div
            className={classNames(cl.root, isOpen ? cl.root_active : '')}
            onClick={() => setIsOpen(false)}>
            <section
                onClick={e => e.stopPropagation()}
                className={cl.root__body}>
                <div className={cl.root__body__top}>
                    <Title
                        variant="h3"
                        text="Notifications"
                    />
                    <Button
                        onClick={() => setIsOpen(false)}
                        variant="icon-secondary"
                        iconName="Close"
                    />
                </div>
                <ul>
                    {headerNotificationItemsArr.map((i, index) => (
                        <HeaderNotificationItem
                            key={index}
                            {...i}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )
}
