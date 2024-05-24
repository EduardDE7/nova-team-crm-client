import { useState } from 'react'

import { sidebarItems } from './profilesettingssidebar.data'
import cl from './ProfileSettingsSidebar.module.scss'
import { ProfileSettingsSidebarItem } from './ui'

export const ProfileSettingsSidebar = () => {
    const [activeButton, setActiveButton] = useState<string>(
        sidebarItems[0].title
    )

    return (
        <div className={cl.root}>
            {sidebarItems.map(({ title, icon }) => (
                <ProfileSettingsSidebarItem
                    key={title}
                    title={title}
                    icon={icon}
                    onClick={() => setActiveButton(title)}
                    active={activeButton === title}
                />
            ))}
        </div>
    )
}
