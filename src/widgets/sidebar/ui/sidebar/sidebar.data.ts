import dashboard from '@/shared/assets/icons/dashboard.svg'
import projects from '@/shared/assets/icons/projects.svg'
import calendar from '@/shared/assets/icons/calendar.svg'
import members from '@/shared/assets/icons/employees.svg'
import messenger from '@/shared/assets/icons/messenger.svg'
import infoportal from '@/shared/assets/icons/infoPortal.svg'
import {
    CALENDARPAGE,
    DASHBOARDPAGE,
    INFOPORTALPAGE,
    MEMBERSPAGE,
    MESSENGERPAGE,
    PROJECTSPAGE
} from '@/shared/router/URL'

export type SidebarItem = {
    title: string
    icon: string
    route: string
}

export const sidebarItems: SidebarItem[] = [
    {
        title: 'Dashboard',
        icon: dashboard,
        route: DASHBOARDPAGE
    },
    {
        title: 'Projects',
        icon: projects,
        route: PROJECTSPAGE
    },
    {
        title: 'Calendar',
        icon: calendar,
        route: CALENDARPAGE
    },
    {
        title: 'Members',
        icon: members,
        route: MEMBERSPAGE
    },
    {
        title: 'Messenger',
        icon: messenger,
        route: MESSENGERPAGE
    },
    {
        title: 'Info Portal',
        icon: infoportal,
        route: INFOPORTALPAGE
    }
]
