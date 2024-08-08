import { AuthPage, LoginPage, PageNotFound } from '@/pages'
import { CalendarPage } from '@/pages/CalendarPage'
import { DashboardPage } from '@/pages/Dashboard'
import { HomePage } from '@/pages/Home'
import { InfoPortalsPage } from '@/pages/InfoPortalsPage'
import { MembersPage } from '@/pages/MembersPage'
import { MessengerPage } from '@/pages/MessengerPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import {
    AUTHPAGE,
    CALENDARPAGE,
    DASHBOARDPAGE,
    HOMEPAGE,
    INFOPORTALPAGE,
    LOGINPAGE,
    MEMBERSPAGE,
    MESSENGERPAGE,
    NOTFOUNDPAGE,
    PROJECTSPAGE
} from '@/shared/router/URL/index'

export const publicRoutes = [
    {
        Page: HomePage,
        path: HOMEPAGE
    },
    {
        Page: AuthPage,
        path: AUTHPAGE
    },
    {
        Page: LoginPage,
        path: LOGINPAGE
    },
    {
        Page: PageNotFound,
        path: NOTFOUNDPAGE
    }
]

export const privateRoutes = [
    {
        Page: DashboardPage,
        path: DASHBOARDPAGE
    },
    {
        Page: ProjectsPage,
        path: PROJECTSPAGE
    },
    {
        Page: CalendarPage,
        path: CALENDARPAGE
    },
    {
        Page: MembersPage,
        path: MEMBERSPAGE
    },
    {
        Page: MessengerPage,
        path: MESSENGERPAGE
    },
    {
        Page: InfoPortalsPage,
        path: INFOPORTALPAGE
    }
]
