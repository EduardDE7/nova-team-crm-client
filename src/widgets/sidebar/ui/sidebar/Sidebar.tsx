import { Link } from 'react-router-dom'

/* eslint-disable import/no-internal-modules */
import mainLogo from '@/shared/assets/images/mainLogo.png'

import { SidebarItem } from '../sidebar-item'
import { studentItems } from './sidebar.data'
import cl from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <div className={cl.root}>
            <div className={cl.root__upperContainer}>
                <Link
                    to={'/'}
                    className={cl.root__mainlogo}>
                    <img
                        src={mainLogo}
                        alt="Main logo"
                    />
                </Link>
                <div className={cl.root__sidebar_items}>
                    {studentItems.map(item => (
                        <SidebarItem
                            title={item.title}
                            icon={item.icon}
                            route={item.route}
                        />
                    ))}
                </div>
            </div>
            <SidebarItem
                title={'Logout'}
                icon={'Logout'}
            />
        </div>
    )
}
