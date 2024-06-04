import { type IconName } from '@/shared'

type TProfileSettingsSidebar = {
    title: string
    icon: IconName
    route: string
}

export const sidebarItems: TProfileSettingsSidebar[] = [
    { title: 'safety', icon: 'Safety', route: '#' },
    { title: 'notification', icon: 'Notification', route: '#' },
    { title: 'connected-apps', icon: 'Connected', route: '#' },
    { title: 'payments', icon: 'Payments', route: '#' }
]
